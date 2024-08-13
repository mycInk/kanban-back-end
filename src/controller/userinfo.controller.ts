import { Body, Controller, Inject, Post } from '@midwayjs/core';
import { UserInfoService } from '../service/userinfo.service';
import { Context } from '@midwayjs/koa';

@Controller('/userinfo')
export class UserInfoController {
  @Inject()
  userInfoService: UserInfoService;
  @Inject()
  ctx: Context;
  @Post('/changename')
  async changeName(@Body() info: { Name: string; uid: string }) {
    console.log('后端数据接收完成!');
    console.log('准备修改昵称');
    const obj = this.userInfoService.changeName(info.Name, info.uid);
    console.log('修改成功！从今天起你就是个女孩子了~');
    return obj;
  }
  @Post('/changepassword')
  async changePassword(@Body() info: { Password: string; uid: string }) {
    console.log('后端数据接收完成!');
    console.log('准备修改密码');
    const obj = this.userInfoService.changePassword(info.Password, info.uid);
    console.log('修改成功！密码已经变成了你的生日了~');
    return obj;
  }
}
