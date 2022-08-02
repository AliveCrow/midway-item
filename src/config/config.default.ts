import { MidwayConfig } from '@midwayjs/core';
import { UserEntity } from '../entity/user.entity';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1659403573027_8832',
  express: {
    port: 6001,
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [UserEntity],
        synchronize: true,
        logging: false,
      },
    },
  },
  jwt: {
    secret: '123456',
    expiresIn: '2d',
  },
} as MidwayConfig;
