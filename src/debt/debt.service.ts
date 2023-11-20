import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Debt } from './debt.entity';
import { CreateDebtDto } from './dtos/create-debt-dto';

@Injectable()
export class DebtService {
  constructor(
    @InjectRepository(Debt)
    private debtRepository: Repository<Debt>,
  ) {}

  async createDebt(
    createDebtDto: CreateDebtDto,
    userId: number,
  ): Promise<Debt> {
    const debt = this.debtRepository.create({
      ...createDebtDto,
      user: { id: userId },
    });
    return this.debtRepository.save(debt);
  }

  async findAllDebts(userId: number): Promise<Debt[]> {
    // find all debts where the user id matches the user id passed in
    return this.debtRepository.find({
      where: { user: { id: userId } },
      order: { totalAmount: 'ASC' },
      relations: ['user'],
    });
  }

  // async findOneDebt(id: number): Promise<Debt> {
  //   return this.debtRepository.findOne(id);
  // }

  // async updateDebt(id: number, updateDebtDto: any): Promise<Debt> {
  //   await this.debtRepository.update(id, updateDebtDto);
  //   return this.debtRepository.findOne(id);
  // }

  // async deleteDebt(id: number): Promise<void> {
  //   await this.debtRepository.delete(id);
  // }
}
