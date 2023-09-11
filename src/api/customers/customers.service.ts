import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';
import { Customer } from './types/Customer';

@Injectable()
export class CustomersService {
  private customers: Array<Customer> = [
    {
      id: 1,
      email: 'janedoe@gmail.com',
      name: 'Jane Doe',
    },
    {
      id: 2,
      email: 'johndoe@gmail.com',
      name: 'John Doe',
    },
    {
      id: 3,
      email: 'matdoe@gmail.com',
      name: 'Mat Doe',
    },
    {
      id: 4,
      email: 'joandoe@gmail.com',
      name: 'Joan Doe',
    },
  ];

  createCustomer(data: CreateCustomerDto) {
    this.customers.push(data);
  }

  findCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
}
