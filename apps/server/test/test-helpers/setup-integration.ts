import { config } from 'dotenv';
import { resolve } from 'path';

// Has to happen before any other imports
config({ path: resolve(__dirname, '../../.env.integration'), override: true });

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Server } from 'net';

import { configApp } from '../../src/app';
import { AppModule } from '@/app.module';

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

beforeEach(async () => {
  jest.clearAllMocks();
  jest.clearAllTimers();
  jest.useRealTimers();
});

afterAll(async () => {
  await integrationTestApp.close();
});

export { integrationTestApp, integrationTestModule };
