import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './bookings.model';

@Module({
  imports:[TypeOrmModule.forFeature([Booking])],
  controllers: [BookingsController],
  providers: [BookingsService]
})
export class BookingsModule {}
