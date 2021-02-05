import { Module } from '@nestjs/common';
import { PrismaModule } from '~/modules/prisma';
import { LoginController } from './login.controller';
import { LoginResolver } from './login.resolver';
import { LoginService } from './login.service';

@Module({
  imports: [PrismaModule],
  controllers: [LoginController],
  providers: [LoginService, LoginResolver]
})
export class LoginModule {}
