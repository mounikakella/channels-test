import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Login } from '~/generated/typegraphql';
import { LoginService } from './login.service';

@Crud({
  model: {
    type: Login
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true
    }
  }
})
@Controller('logins')
export class LoginController {
  constructor(public service: LoginService) {}
}
