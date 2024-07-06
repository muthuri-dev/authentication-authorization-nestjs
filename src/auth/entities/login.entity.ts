import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Login {
  @Field()
  access_token: string;

  @Field()
  user: User;
}
