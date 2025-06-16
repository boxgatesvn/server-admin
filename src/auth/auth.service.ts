import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { comparePasswordHelper } from 'src/helpers/utils';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isValidPassword = await comparePasswordHelper(pass, user?.password);
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user?._id, username: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
