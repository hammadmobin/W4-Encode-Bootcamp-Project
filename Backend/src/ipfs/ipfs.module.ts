import { Module } from '@nestjs/common';
import { IpfsService } from './ipfs.service';
import { IpfsController } from './ipfs.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: '../upload',
    }),
  ],
  controllers: [IpfsController],
  providers: [IpfsService],
})
export class IpfsModule {}