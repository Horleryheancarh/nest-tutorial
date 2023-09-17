import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserByUsername(username);

    if (user) {
      const matched = comparePassword(password, user.password);
      if (matched) {
        console.log('Passwords match');
        return user;
      } else {
        console.log('Password do not match');
        return null;
      }
    }

    return null;
  }
}
