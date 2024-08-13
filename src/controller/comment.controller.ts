import {
  Body,
  Controller,
  Del,
  Get,
  Inject,
  Post,
  Query,
} from '@midwayjs/core';
import { CommentService } from '../service/comment.service';

@Controller('/comment')
export class CommentController {
  @Inject()
  commentService: CommentService;
  @Get('/getlist')
  async getCommentList(@Query() MissionID) {
    console.log('后端数据接收完成!');
    console.log('准备加载CommentList');
    return this.commentService.getCommentList(MissionID);
  }
  @Post('/add')
  async addComment(@Body() CommentInfo) {
    console.log('后端数据接收完成!');
    console.log('准备添加Comment');
    return this.commentService.addComment(CommentInfo);
  }
  @Del('/remove')
  async deleteComment(@Query() CommentID) {
    console.log('后端数据接收完成!');
    console.log('准备删除Comment');
    return this.commentService.removeComment(CommentID);
  }
}
