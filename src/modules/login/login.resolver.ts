import { Resolver } from 'type-graphql';
import { LoginCrudResolver, Login } from '~/generated/typegraphql';

@Resolver((_of: any) => Login)
export class LoginResolver extends LoginCrudResolver {}
