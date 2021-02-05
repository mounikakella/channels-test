import { CountModule } from './count';
import { PassportSessionModule, AuthModule } from './auth';
import { PrismaModule } from './prisma';
import { UserModule } from './user';
import { LoginModule } from './login';

export default [
  AuthModule,
  CountModule,
  PassportSessionModule,
  PrismaModule,
  UserModule,
  LoginModule
];
