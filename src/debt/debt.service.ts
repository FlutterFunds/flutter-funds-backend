import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Debt } from './debt.entity';
import { CreateDebtDto } from './dtos/create-debt.dto';

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
      where: { user: { id: userId }, deletedAt: IsNull() },
      order: { totalAmount: 'ASC' },
      relations: ['user'],
    });
  }

  async findOneDebt(id: number): Promise<Debt> {
    return this.debtRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async updateDebt(id: number, updateDebtDto: any): Promise<Debt> {
    const debt: Debt = await this.findOneDebt(id);
    if (!debt) {
      throw new Error('Debt not found');
    }
    Object.assign(debt, updateDebtDto);
    return this.debtRepository.save(debt);
  }

  async softDeleteDebt(id: number): Promise<Debt> {
    const debt = await this.findOneDebt(id);
    if (!debt) {
      throw new Error('Debt not found');
    }
    debt.deletedAt = new Date();
    return this.debtRepository.save(debt);
  }

  async restoreDebt(id: number): Promise<Debt> {
    const debt = await this.findOneDebt(id);
    if (!debt) {
      throw new Error('Debt not found');
    }
    debt.deletedAt = null;
    return this.debtRepository.save(debt);
  }
}
