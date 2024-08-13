import { Controller, Post, Body, Inject } from '@midwayjs/core';
import { SignInService } from '../service/signin.service';
import { Context } from '@midwayjs/koa';
@Controller('/signin')
export class SignInController {
  @Inject()
  ctx: Context;
  @Inject()
  signinservice: SignInService;
  @Post('/')
  async ReceiveMayUser(@Body() muser: { Account: string; Password: string }) {
    console.log('后端数据接收完成!');
    console.log('准备登录');
    const obj = await this.signinservice.signinService(muser);
    if (obj === null) {
      console.log('查无此人');
      return { success: false, message: '查无此人' };
    } else {
      console.log('欢迎登录！Ciallo～(∠・ω< )⌒★');
      return {
        success: true,
        message: '找到了！',
        data: {
          uid: obj.uid,
          Account: obj.Account,
          Password: obj.Password,
          Name: obj.Name,
        },
      };
    }
  }
}
