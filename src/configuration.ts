import { Configuration, App } from '@midwayjs/decorator';
import { IMidwayContainer } from '@midwayjs/core';
import * as express from '@midwayjs/express';
import * as orm from '@midwayjs/typeorm';
import * as validate from '@midwayjs/validate';
import * as jwt from '@midwayjs/jwt';
import { join } from 'path';

@Configuration({
  imports: [express, orm, validate, jwt],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: express.Application;

  async onReady() {}
}
export class MainConfiguration {
  async onReady(applicationContext: IMidwayContainer): Promise<void> {
    // 添加中间件
  }
}
