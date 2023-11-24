import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsString()
  amount?: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: Date;

  @IsOptional()
  @IsString()
  status?: string;

  // Include other fields that can be updated
}
