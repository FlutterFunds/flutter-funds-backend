import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity'; // Assuming you have a User entity
import { Payment } from 'src/payment/payment.entity';

@Entity()
export class Debt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.debts)
  user: User;

  @Column()
  type: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: string;

  @Column('decimal', { precision: 10, scale: 2 })
  currentBalance: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: true, default: '.12' })
  apr: string;

  @Column('decimal', { precision: 10, scale: 2 })
  monthlyPayment: string;

  @Column('date', { nullable: true })
  nextDueDate: Date;

  @Column('date', { default: () => 'CURRENT_DATE' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date | null;

  @Column({ type: 'date', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Payment, (payment) => payment.debt)
  payments: Payment[];
}
