import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from './types/User';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'johndoe',
      password: 'johndoe',
    },
    {
      username: 'janedoe',
      password: 'janedoe',
    },
    {
      username: 'mattdoe',
      password: 'mattdoe',
    },
    {
      username: 'joandoe',
      password: 'joandoe',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
