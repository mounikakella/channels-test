import { PassportSessionModule, AuthModule } from './auth';
import { PrismaModule } from './prisma';
import { UserModule } from './user';
import { LoginModule } from './login';

export default [
  AuthModule,
  PassportSessionModule,
  PrismaModule,
  UserModule,
  LoginModule
];
