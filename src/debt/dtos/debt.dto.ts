import { Expose, Transform } from 'class-transformer';

export class DebtDto {
  @Expose()
  id: number;

  @Expose()
  type: string;

  @Expose()
  totalAmount: number;

  @Expose()
  currentBalance: number;

  @Expose()
  apr: number;

  @Expose()
  monthlyPayment: number;

  @Expose()
  nextDueDate: Date | null;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date | null;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
