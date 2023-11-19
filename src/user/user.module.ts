import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentUserMiddleware } from './middlewares/current-user-middleware';
import { AuthService } from 'src/auth/auth.service';

@Module({
  providers: [UserService, AuthService],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
