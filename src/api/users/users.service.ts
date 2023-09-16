import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { SerializedUser, User } from './types/User';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { User as UserEntity } from 'src/database';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async getUsers() {
    const users = await this.userRepository.find();
    return users.map((user) => plainToClass(SerializedUser, user));
  }

  async getUserByUsername(username: string) {
    return await this.userRepository.findOneBy({ username });
  }

  async getUserById(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async findUserByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }
}
