import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-crud-prisma';
import { PrismaService } from '~/modules/prisma';
import { Login } from '~/generated/typegraphql';

@Injectable()
export class LoginService extends PrismaCrudService<Login> {
  constructor(prisma: PrismaService) {
    super(prisma, Login);
  }
}
