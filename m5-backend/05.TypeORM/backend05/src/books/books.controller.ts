import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService){}

    @Get()
    findAll(): Promise<Book[]>{
        return this.bookService.findAll();
    }

    @Get('id/:id')
    findById(@Param ('id') id: number):Promise<Book| null>{
        return this.bookService.findById(id);
    }

    //http.//localhost:300/books/title-eq/book1
    @Get('title/:title')
    findAllByTitleEquals(@Param("title") title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleEquals(title);
    }

    //http.//localhost:300/books/title-like/libro
    @Get('title-like/:title')
    findAllByTitleLike(title: string): Promise<Book[]> {
        return this.bookService.findAllByTitleLike(title);
    }  

    //Buscar por rango de precios
    @Get('price/min/:min/max/:max')
    findAllByPriceBetween(
        @Param('min') min:number, 
        @Param('max') max: number): Promise<Book[]>{
        return this.bookService.findAllByPriceBetween(min,max);
    }


    //Encontrar libro por si esta publicado

    @Get('published')
    findAllByPublishedTrue(): Promise<Book[]>{
        return this.bookService.findAllByPublishedTrue();
    }


    @Get('quantity/:quantity/price/:price')
    findAllByQuantityAndPrice( 
        @Param('quantity') quantity: number, 
        @Param('price') price: number): Promise<Book[]>{
            return this.bookService.findAllByQuantityAndPrice(quantity,price);
        }


    @Get('order-by-price-asc')
    findAllOrderByPriceAsc(): Promise<Book[]>{
        return this.bookService.findAllOrderByPriceAsc();
    }

/**  Comprobar
 * localhost/3000/books
 * {
        "id": 0,
        "title": "libro postman",
        "isbn": "11111111",
        "price": "10.00",
        "createDate": "null",
        "quantity": 2,
        "published": true
    }*/

    @Post()
    async create(@Body() book:Book): Promise<Book>{
        return await this.bookService.create(book);
    }

    //Metodo Update del service

    @Put()
    async update(@Body() book:Book): Promise<Book>{
        return await this.bookService.update(book);
    }


    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id: number
        ): Promise<void>{
        return await this.bookService.deleteById(id);
    }




}
