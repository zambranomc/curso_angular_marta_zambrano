import { Module } from '@nestjs/common';
import { EditorialsService } from './editorials.service';
import { EditorialsController } from './editorials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editorial } from './editorials.model';

@Module({
  imports:[TypeOrmModule.forFeature([Editorial])],
  providers: [EditorialsService],
  controllers: [EditorialsController]
})
export class EditorialsModule {}
