import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Request, Response } from 'express';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get('')
  getCustomers() {
    return this.customerService.findCustomers();
  }

  // Express way
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customerService.findCustomerById(id);

    if (customer) {
      res.send(customer);
    } else {
      res.status(404).send({ message: 'Customer Not Found' });
    }
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() data: CreateCustomerDto) {
    this.customerService.createCustomer(data);
  }

  // Nest way
  @Get('/search/:id')
  searchCUstomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customerService.findCustomerById(id);

    if (!customer)
      throw new HttpException('Customer Not Found', HttpStatus.NOT_FOUND);

    return customer;
  }
}
