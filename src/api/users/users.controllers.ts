import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SerializedUser } from './types/User';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}

  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  getByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);

    if (!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);

    return new SerializedUser(user);
  }
}
