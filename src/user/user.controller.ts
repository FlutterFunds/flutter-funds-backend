import { Body, Controller, Post } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serializeInterceptor';
import { UserDto } from './dtos/user.dts';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user-.dto';

@Serialize(UserDto)
@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signup')
  async signup(@Body() body: CreateUserDto) {
    const user = await this.userService.create(body.email, body.password);
    return user;
  }
}
