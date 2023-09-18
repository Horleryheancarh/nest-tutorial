import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { CustomersModule } from './api/customers/customers.module';
import { UsersModule } from './api/users/users.module';
import entities from './database';
import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities,
      synchronize: true,
    }),
    PassportModule.register({
      session: true,
    }),
    CustomersModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
