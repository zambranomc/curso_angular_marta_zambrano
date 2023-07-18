import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Request, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService){}

    @Get()
    findAll(): Promise<Book[]>{
        return this.bookService.findAll();
        
    }

    @Get('load-relations')
    findAllWhithRelatons(): Promise<Book[]>{
        //Asociacion simple
        return this.bookService.findAllWithRelatons();
       
    }

    @Get('projections')
    findAllProjections(): Promise<Book[]>{
       
        return this.bookService.findAllProjections();

    }


   @Get('author/:authorId')
   findAllByAuthorId(
       @Param("authorId", ParseIntPipe) authorId: number
       ): Promise<Book[]> {
       return this.bookService.findAllByAuthorId(authorId);
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

     /*
    Cambiar ISBN:
        {
    {
        "id": 0,
        "title": "libro postman",
        "isbn": "111111111",
        "price": "2.45",
        "quantity": 50,
        "published": false
        "title": "book postman2",
        "isbn": "77777777",
        "price": "11.00",
        "quantity": 1,
        "published": true,
        "author": {
            "id": 1
        },
        "editorial": {
            "id": 1
        }
    }
    */

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

    @Delete('author-id/:authorId')
    async deleteAllByAuthorId(
        @Param('authorId', ParseIntPipe) authorId: number
        ): Promise<void>{
        return await this.bookService.deleteAllByAuthorId(authorId);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post(':bookId/images')
    @UseInterceptors(FilesInterceptor('file'))
    async uploadBookImages(
        @Request() request,
        @Param('bookId', ParseIntPipe)bookId: number,
        @UploadedFiles() files: Express.Multer.File[]
        ){
            console.log(files);
            console.log(files.length);
            //obtener el libro y si no existe lanzar una excepción
            let book = await this.bookService.findById(bookId);
            if(!book) throw new NotFoundException('Book not found');

           //Asociar los nombre de los archivos en el atributo images del objeto book
           book.images = [];
           files.forEach(file => book.images.push(file.filename));

           //Guardar el book en la base de datos

           return await this.bookService.update(book);
        }


}
