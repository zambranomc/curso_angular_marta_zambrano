import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books.model';
import { CategoriesModule } from 'src/categories/categories.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
@Module({
    imports: [    MulterModule.register({
      storage: diskStorage({
        // carpeta destino donde se guardarán los archivos interceptados en los controladores
        destination: './uploads',
        // definir cómo se genera el nombre del archivo antes de guardarlo en la carpeta uploads
        filename: (req, file, callback) => {
          let fileName = uuidv4() + extname(file.originalname);
          callback(null, fileName);
        }
      })
    }),
      TypeOrmModule.forFeature([Book]),
      CategoriesModule
    ], //Importo modelo tabla Book para utilizar el servicio
            // Importo el servicio categories service
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
