import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { DatabaseModule } from './database/database.module';
import { AuthorsModule } from './authors/authors.module';
import { EditorialsModule } from './editorials/editorials.module';
import { LocationsModule } from './locations/locations.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './bookings/bookings.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [DatabaseModule, BooksModule, AuthorsModule, EditorialsModule, LocationsModule, CategoriesModule, UsersModule, BookingsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
