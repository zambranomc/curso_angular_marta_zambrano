import { Module } from '@nestjs/common';
import { EditorialsService } from './editorials.service';
import { EditorialsController } from './editorials.controller';

@Module({
  providers: [EditorialsService],
  controllers: [EditorialsController]
})
export class EditorialsModule {}
