import { IsOptional, IsDecimal, IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateDebtDto {
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '2' })
  totalAmount?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '2' })
  currentBalance?: string;

  @IsOptional()
  @IsDecimal(
    { decimal_digits: '2', force_decimal: true },
    { message: 'APR must be a valid decimal number.' },
  )
  apr?: string;

  @IsOptional()
  @IsDecimal({ decimal_digits: '2' })
  monthlyPayment?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  nextDueDate?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startDate?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  endDate?: Date | null;
}
