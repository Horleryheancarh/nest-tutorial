import { Module } from '@nestjs/common';
import { CustomersModule } from './api/customers/customers.module';
import { UsersModule } from './api/users/users.module';

@Module({
  imports: [CustomersModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
