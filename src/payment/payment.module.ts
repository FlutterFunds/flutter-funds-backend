import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { DebtService } from 'src/debt/debt.service';
import { Debt } from 'src/debt/debt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, Debt])],
  providers: [PaymentService, DebtService],
  controllers: [PaymentController],
})
export class PaymentModule {}
