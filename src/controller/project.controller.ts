import {
  Body,
  Controller,
  Del,
  Get,
  Inject,
  Post,
  Query,
} from '@midwayjs/core';
import { ProjectService } from '../service/project.service';
@Controller('/project')
export class ProjectController {
  @Inject()
  projectService: ProjectService;
  @Get('/getlist')
  async getProjectList() {
    console.log('后端数据接收完成!');
    console.log('准备加载ProjectList');
    return this.projectService.getProjectList();
  }
  @Post('/add')
  async addProject(@Body() NewProjectInfo) {
    console.log('后端数据接收完成!');
    console.log('准备添加Project');
    return this.projectService.addProject(NewProjectInfo);
  }
  @Del('/remove')
  async deleteProject(@Query() ProjectID) {
    console.log('后端数据接收完成!');
    console.log('准备删除Project');
    return this.projectService.removeProject(ProjectID);
  }
  @Get('/getinfo')
  async getProjectInfo(@Body() ProjectInfo) {
    console.log('后端数据接收完成!');
    console.log('准备获取Project信息');
    return this.projectService.getProjectInfo(ProjectInfo);
  }
  @Post('/editname')
  async editProjectName(@Body() ProjectInfo) {
    console.log('后端数据接收完成!');
    console.log('准备修改Project名称');
    return this.projectService.editProjectName(ProjectInfo);
  }
}
