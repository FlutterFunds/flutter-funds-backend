import { IsOptional, IsString, IsDateString, IsDecimal } from 'class-validator';

export class CreateDebtDto {
  @IsString()
  type: string;

  @IsDecimal()
  totalAmount: number;

  @IsDecimal()
  currentBalance: number;

  @IsDecimal()
  @IsOptional()
  apr: number;

  @IsDecimal()
  @IsOptional()
  monthlyPayment: number;

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
