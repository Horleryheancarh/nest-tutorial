import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      name: 'NEST_SESSION_ID',
      secret: 'ASDFNJKREOQTRHBMVOISLWEKRQOTJKLDFNLAJFEROIUTQPWEIJKLSDNNCMSERI',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
