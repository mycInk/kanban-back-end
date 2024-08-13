import { MidwayConfig } from '@midwayjs/core';
export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1723041271128_3034',
  koa: {
    port: 7001,
  },
  cors: {
    origin: '*',
  },
  upload: {
    fileSize: '50mb',
    whitelist: ['.'],
  },
} as MidwayConfig;
