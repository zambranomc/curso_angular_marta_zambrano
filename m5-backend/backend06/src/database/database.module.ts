import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Author } from 'src/authors/authors.model';
import { Booking } from 'src/bookings/bookings.model';
import { Book } from 'src/books/books.model';
import { Category } from 'src/categories/categories.model';
import { Editorial } from 'src/editorials/editorials.model';
import { Location } from 'src/locations/locations.model';
import { User } from 'src/users/users.model';

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
                Book, Author, Editorial, Location, Category, User, Booking
            ],
            synchronize: true, //genera tablas automaticamente en base a entidades
            logging: true
        })
    ]
})
export class DatabaseModule {}
