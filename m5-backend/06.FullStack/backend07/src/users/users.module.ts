import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.model';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [  
    MulterModule.register({
    storage: diskStorage({
      //Carpeta destino donde se guardaran los archivos interceptados en los controladores
      destination:'./uploads',
      // Definir como se genera el nombre del archivo antes de guardarlo en la carpeta uploads
      filename:(req,  file, callback)=>{
        let fileName = uuidv4() + extname(file.originalname)
        callback(null, fileName);
      }
    })
  }),
    TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}


