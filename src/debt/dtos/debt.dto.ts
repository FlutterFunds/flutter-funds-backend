import { Expose, Transform } from 'class-transformer';

export class DebtDto {
  @Expose()
  id: number;

  @Expose()
  type: string;

  @Expose()
  totalAmount: string;

  @Expose()
  currentBalance: string;

  @Expose()
  apr: string;

  @Expose()
  monthlyPayment: string;

  @Expose()
  nextDueDate: Date | null;

  @Expose()
  startDate: Date;

  @Expose()
  endDate: Date | null;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;

  @Expose()
  deletedAt: Date | null;
}
