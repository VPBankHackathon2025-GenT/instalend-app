import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Server } from 'net';

import { configApp } from './app';
import { AppModule } from './app.module';
import { CommonConfig, commonConfigObj } from './common/config';

const bootstrapLogger = new Logger('Bootstrap');

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<INestApplication<Server>>(AppModule);
  configApp(app);

  const { port } = app.get<CommonConfig>(commonConfigObj.KEY);
  await app.listen(port, () => {
    bootstrapLogger.log(`listening on port ${port}`);
  });
}

bootstrap().catch((err: unknown) => {
  bootstrapLogger.error(`Server startup failed ${err}`);
  process.exit(1);
});
