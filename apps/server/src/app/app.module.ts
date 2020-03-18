import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from './auth';
import { DeviceComsModule } from './device-coms';

@Module({
  imports: [
    AuthModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      autoSchemaFile: true
    }),
    DeviceComsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
