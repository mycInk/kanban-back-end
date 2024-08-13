import {
  Controller,
  Post,
  Get,
  Body,
  Inject,
  Files,
  Fields,
  Query,
} from '@midwayjs/core';
import { FileService } from '../service/file.service';

@Controller('/file')
export class FileController {
  @Inject()
  fileService: FileService;
  @Post('/upload')
  async uploadFile(@Files() files, @Fields() fields) {
    console.log('后端数据接收完成!');
    console.log('准备上传文件');
    return this.fileService.uploadFile(files, fields);
  }
  @Get('/download')
  async downloadFile(@Query() fileInfo) {
    console.log('后端数据接收完成!');
    console.log('准备下载文件');
    return this.fileService.downloadFile(fileInfo);
  }
  @Post('/delete')
  async deleteFile(@Body() file) {
    console.log('后端数据接收完成!');
    console.log('准备删除文件');
    return this.fileService.deleteFile(file);
  }
}
