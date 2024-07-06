import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginDto {
  @Field()
  username: string;

  @Field()
  password: string;
}
