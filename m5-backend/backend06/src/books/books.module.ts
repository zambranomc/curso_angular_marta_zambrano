import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.model';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports:[TypeOrmModule.forFeature([Book]),
            CategoriesModule
          ], //Importo modelo tabla Book para utilizar el servicio
            // Importo el servicio categories service
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
