import { configApp } from '@/app';
import { AppModule } from '@/app.module';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
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

beforeEach(async () => {
  jest.clearAllMocks();
  jest.clearAllTimers();
  jest.useRealTimers();
});

afterAll(async () => {
  await integrationTestApp.close();
});

export { integrationTestApp, integrationTestModule };
