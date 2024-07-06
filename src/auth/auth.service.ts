import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);

    if (!user) throw new BadRequestException('User not found');

    const isPasswordValid = await bcrypt.compare(password, user?.password);

    if (user && isPasswordValid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }), // TODO: implement jwt -done
      user,
    };
  }

  async signup(signupDto: LoginDto) {
    const user = await this.userService.findOne(signupDto.username);
    if (user) throw new Error('User already exists');
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);
    return this.userService.create({ ...signupDto, password: hashedPassword });
  }
}
