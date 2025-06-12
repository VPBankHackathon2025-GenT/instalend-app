import { configApp } from '@/app';
// eslint-disable-next-line import/order
import { resolve } from 'path';

// Env must be configured before importing `AppModule`, to ensure that
// correct environment variables are loaded.
config({ path: resolve(__dirname, '../../.env.integration'), override: true });

import { AppModule } from '@/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { config } from 'dotenv';
import { Server } from 'net';

let integrationTestModule: TestingModule;
let integrationTestApp: INestApplication<Server>;

beforeAll(async () => {
  integrationTestModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  integrationTestApp = integrationTestModule.createNestApplication();
  configApp(integrationTestApp);

  await integrationTestApp.init();
});

afterAll(async () => {
  await integrationTestApp.close();
});

export { integrationTestApp, integrationTestModule };
