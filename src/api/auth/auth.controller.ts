import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from './auth.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {
    console.log('hello world');
  }

  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    session.authenticated = true;

    return session;
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  async getAuthStatus(@Req() req: Request) {
    return req.user;
  }
}
