import { NestFactory } from '@nestjs/core';

import { UsersModule } from './user/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(3000);
}
bootstrap();
