import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'janedoe@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'johndoe@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'matdoe@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'joandoe@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomers() {
    return this.users;
  }

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
