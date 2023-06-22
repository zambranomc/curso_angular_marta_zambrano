import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.model';

@Module({
  imports:[TypeOrmModule.forFeature([Book])], //Importo modelo tabla Book para utilizar el servicio
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
