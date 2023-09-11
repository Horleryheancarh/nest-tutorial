import { Module } from '@nestjs/common';
import { CustomersModule } from './api/customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
