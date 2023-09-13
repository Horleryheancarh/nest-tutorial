import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from './types/User';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'johndoe',
      password: 'johndoe',
    },
    {
      id: 2,
      username: 'janedoe',
      password: 'janedoe',
    },
    {
      id: 3,
      username: 'mattdoe',
      password: 'mattdoe',
    },
    {
      id: 4,
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

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
