import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Author } from 'src/authors/authors.model';
import { Book } from 'src/books/books.model';
import { Editorial } from 'src/editorials/editorials.model';
import { Location } from 'src/locations/locations.model';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username:'root',
            password:'admin',//sustituir por la variable de entorno
            database:'backend_nest',
            entities:[
                //__dirname +'/../**/*.model.ts'
                Book, Author, Editorial, Location
            ],
            synchronize: true, //genera tablas automaticamente en base a entidades
            logging: true
        })
    ]
})
export class DatabaseModule {}
