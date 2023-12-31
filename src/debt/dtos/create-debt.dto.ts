import { IsOptional, IsString, IsDateString, IsDecimal } from 'class-validator';

export class CreateDebtDto {
  @IsString()
  type: string;

  @IsDecimal()
  totalAmount: string;

  @IsDecimal()
  currentBalance: string;

  @IsDecimal()
  @IsOptional()
  apr: string;

  @IsDecimal()
  @IsOptional()
  monthlyPayment: string;

  @IsDateString()
  @IsOptional()
  nextDueDate: Date | null;

  @IsDateString()
  @IsOptional()
  startDate: Date;

  @IsDateString()
  @IsOptional()
  endDate: Date | null;
}
