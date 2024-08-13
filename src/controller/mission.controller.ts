import {
  Body,
  Controller,
  Get,
  Post,
  Inject,
  Query,
  Del,
} from '@midwayjs/core';
import { MissionService } from '../service/mission.service';

@Controller('/mission')
export class MissionController {
  @Inject()
  missionService: MissionService;
  @Get('/getlist')
  async getMissionList(@Query() ProjectID) {
    console.log('后端数据接收完成!');
    console.log('准备加载MissionList');
    return this.missionService.getMissionList(ProjectID);
  }
  @Post('/editname')
  async editMissionName(@Body() MissionInfo) {
    console.log('后端数据接收完成!');
    console.log('准备修改Mission名称');
    return this.missionService.editMissionName(MissionInfo);
  }
  @Post('/add')
  async addMission(@Body() NewMissionInfo) {
    console.log('后端数据接收完成!');
    console.log('准备添加Mission');
    return this.missionService.addMission(NewMissionInfo);
  }
  @Del('/remove')
  async deleteMission(@Query() MissionID) {
    console.log('后端数据接收完成!');
    console.log('准备删除Mission');
    return this.missionService.removeMission(MissionID);
  }
  @Get('/getinfo')
  async getMissionInfo(@Query() MissionInfo) {
    console.log('后端数据接收完成!');
    console.log('准备获取Mission信息');
    return this.missionService.getMissionInfo(MissionInfo);
  }
  @Post('/editstatus')
  async editMissionStatus(@Body() MissionInfo) {
    console.log('后端数据接收完成!');
    console.log('准备修改Mission状态');
    return this.missionService.editMissionStatus(MissionInfo);
  }
  @Post('/editdescription')
  async editMissionDescription(@Body() MissionInfo) {
    console.log('后端数据接收完成!');
    console.log('准备修改Mission描述');
    return this.missionService.editMissionDescription(MissionInfo);
  }
}
