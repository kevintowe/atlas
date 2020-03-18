import { Controller, Post } from '@nestjs/common';

@Controller('device-coms')
export class DeviceComsController {
  constructor() {}

  @Post('gps-data')
  async deviceGpsData() {
    console.log('hello world');
  }
}
