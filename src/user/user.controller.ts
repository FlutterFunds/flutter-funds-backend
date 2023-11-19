import { Body, Controller, Delete, Param, Post, Session } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serializeInterceptor';
import { UserDto } from './dtos/user.dts';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Serialize(UserDto)
@Controller('auth')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Post('/signup')
  async signup(@Body() body: CreateUserDto) {
    const user = await this.authService.signUp(body.email, body.password);
    return user;
  }

  @Post('/signin')
  async signin(@Body() body: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signIn(body.email, body.password);
    session.userId = user.id;
    return user;
  }

  @Post('/signout')
  async signOut(@Session() session: any) {
    session.userId = null;
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
