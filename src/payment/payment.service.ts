import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { DebtService } from 'src/debt/debt.service';
import { CreatePaymentDto } from './dtos/create-payment.dto';
import { UpdatePaymentDto } from './dtos/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    private debtService: DebtService,
  ) {}

  async createPayment(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const debt = await this.debtService.findOneDebt(createPaymentDto.debtId);
    if (!debt) {
      throw new Error('Debt not found');
    }
    const payment = this.paymentRepository.create({
      ...createPaymentDto,
      debt,
    });
    return this.paymentRepository.save(payment);
  }

  async updatePayment(
    id: number,
    updatePaymentDto: UpdatePaymentDto,
  ): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({
      where: { id },
      relations: ['debt'],
    });

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    const debt = payment?.debt;
    if (!debt) {
      throw new Error('Debt not found');
    }
    // Update the payment details
    Object.assign(payment, updatePaymentDto);

    return this.paymentRepository.save(payment);
  }
}
