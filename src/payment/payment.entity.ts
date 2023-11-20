import { Debt } from 'src/debt/debt.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Debt, (debt) => debt.payments)
  debt: Debt;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: string;

  @Column('date')
  paymentDate: Date;
}
