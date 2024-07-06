import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Login } from './entities/login.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql.guard';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Login)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Login)
  @UseGuards(GqlAuthGuard)
  async login(@Args('loginDto') loginDto: LoginDto, @Context() context) {
    return await this.authService.login(context.user);
  }

  @Mutation(() => User)
  async signup(@Args('signupDto') signupDto: LoginDto) {
    return await this.authService.signup(signupDto);
  }
}
