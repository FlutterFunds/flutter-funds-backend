import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  debtId: number;

  @IsString()
  amount: string;

  @IsDateString()
  paymentDate: Date;
}
