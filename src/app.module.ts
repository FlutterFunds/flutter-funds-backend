import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BudgetModule } from './budget/budget.module';
import { TransactionModule } from './transaction/transaction.module';
import { DebtModule } from './debt/debt.module';
import { PaymentModule } from './payment/payment.module';
import { CategoryModule } from './category/category.module';
import { ReportingModule } from './reporting/reporting.module';
import { UtilityModule } from './utility/utility.module';

@Module({
  imports: [UserModule, BudgetModule, TransactionModule, DebtModule, PaymentModule, CategoryModule, ReportingModule, UtilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
