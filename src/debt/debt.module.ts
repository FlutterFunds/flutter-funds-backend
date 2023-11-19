import { Module } from '@nestjs/common';
import { DebtService } from './debt.service';
import { DebtController } from './debt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debt } from './debt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Debt])],
  providers: [DebtService],
  controllers: [DebtController],
})
export class DebtModule {}
