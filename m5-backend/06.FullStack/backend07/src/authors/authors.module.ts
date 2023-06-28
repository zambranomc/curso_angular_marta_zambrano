import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { Author } from './authors.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Author])],//Asociacion
  controllers: [AuthorsController],
  providers: [AuthorsService]
})

export class AuthorsModule{}




