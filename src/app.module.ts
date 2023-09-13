import { Module } from '@nestjs/common';
import { CustomersModule } from './api/customers/customers.module';
import { UsersModule } from './api/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './database';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
