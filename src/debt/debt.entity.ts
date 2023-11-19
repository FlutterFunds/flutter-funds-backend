import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity'; // Assuming you have a User entity

@Entity()
export class Debt {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.debts)
  user: User;

  @Column()
  type: string;

  @Column('decimal', { precision: 10, scale: 2 })
  totalAmount: number;

  @Column('decimal', { precision: 10, scale: 2 })
  currentBalance: number;

  @Column('decimal', { precision: 5, scale: 2, nullable: true, default: 12 })
  apr: number;

  @Column('decimal', { precision: 10, scale: 2 })
  monthlyPayment: number;

  @Column('date')
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date | null;
}
