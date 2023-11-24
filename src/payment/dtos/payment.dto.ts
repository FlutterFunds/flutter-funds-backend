import { Expose, Transform } from 'class-transformer';
import { DebtDto } from 'src/debt/dtos/debt.dto';

export class PaymentDto {
  @Expose()
  id: number;

  @Expose()
  amount: string; // Assuming you're storing amount as a string

  @Expose()
  paymentDate: Date;

  @Transform(({ obj }) => obj.debt)
  @Expose()
  debt: DebtDto;
}
