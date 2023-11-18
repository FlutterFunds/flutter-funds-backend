import { Module } from '@nestjs/common';
import { DebtService } from './debt/debt.service';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  providers: [DebtService, PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
