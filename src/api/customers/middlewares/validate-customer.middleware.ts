import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello, from the Validate Customer Middleware');
    const { authorization } = req.headers;
    if (!authorization)
      throw new UnauthorizedException('No Authentication Token Provided');

    if (authorization === '123') {
      next();
    } else {
      throw new UnauthorizedException('Invalid Authentication Token');
    }
  }
}
