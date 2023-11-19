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

  @Column()
  totalAmount: number;

  @Column()
  currentBalance: number;

  @Column({ default: 12 })
  apr: number;

  @Column()
  monthlyPayment: number;

  @Column('date', { nullable: true })
  nextDueDate: Date;

  @Column('date', { default: () => 'CURRENT_DATE' })
  startDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date | null;
}
