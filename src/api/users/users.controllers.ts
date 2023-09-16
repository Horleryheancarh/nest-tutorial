import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SerializedUser } from './types/User';
import { UserNotFoundException } from './exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from './filters/HttpException.filter';
import { CreateUserDto } from './dtos/CreateUser.dto';

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
  @Get('username/:username')
  async getByUsername(@Param('username') username: string) {
    const user = await this.userService.getUserByUsername(username);

    if (!user) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);

    return new SerializedUser(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  @Get('id/:id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUserById(id);

    if (!user) throw new UserNotFoundException();

    return new SerializedUser(user);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
