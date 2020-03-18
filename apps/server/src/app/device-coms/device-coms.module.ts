import { Module } from '@nestjs/common';

import { DeviceComsController } from './controllers';

@Module({
  controllers: [DeviceComsController],
  providers: []
})
export class DeviceComsModule {}
