import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Repository } from 'typeorm';
import { DebtService } from 'src/debt/debt.service';
import { CreatePaymentDto } from './dtos/create-payment.dto';

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
}
