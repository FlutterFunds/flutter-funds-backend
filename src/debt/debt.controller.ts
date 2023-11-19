import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { DebtService } from './debt.service';
import { CreateDebtDto } from './dtos/create-debt-dto';
import { CurrentUser } from 'src/user/decorators/current-user.decorator';
import { User } from 'src/user/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('debts')
export class DebtController {
  constructor(private readonly debtService: DebtService) { }

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() createDebtDto: CreateDebtDto,
    @CurrentUser() user: User,
  ) {
    return this.debtService.createDebt(createDebtDto, user.id);
  }

  // @Get()
  // async findAll() {
  //   return this.debtService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return this.debtService.findOne(+id);
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() updateDebtDto: UpdateDebtDto) {
  //   return this.debtService.update(+id, updateDebtDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.debtService.remove(+id);
  // }
}
