import { Controller, Post, Body, Inject } from '@midwayjs/core';
import { SignUpService } from '../service/signup.service';
import { UserInfo } from '../interface';

@Controller('/signup')
export class SignUpController {
  @Inject()
  signupservice: SignUpService;
  @Post('/')
  async ReceiveNewUser(@Body() user: UserInfo) {
    console.log('后端数据接收完成!');
    console.log('准备注册');
    const obj = this.signupservice.signupService(user);
    console.log('注册成功！欢迎探索新世界！');
    return obj;
  }
}
