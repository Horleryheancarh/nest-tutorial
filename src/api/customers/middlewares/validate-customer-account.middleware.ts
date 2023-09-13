import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello, from the Validate Customer Account Middleware');
    const { valid } = req.headers;

    if (!valid) throw new UnauthorizedException('Invalid User Account');

    next();
  }
}
