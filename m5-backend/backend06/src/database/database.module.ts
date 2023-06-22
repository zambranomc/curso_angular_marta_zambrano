import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Author } from 'src/authors/authors.model';
import { Book } from 'src/books/books.model';

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
                Book, Author
            ],
            synchronize: true //genera tablas automaticamente en base a entidades
        })
    ]
})
export class DatabaseModule {}
