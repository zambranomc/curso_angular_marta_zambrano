import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { LocationsService } from './locations.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Location } from './locations.model';
@Module({
  imports:[TypeOrmModule.forFeature([Location])],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
