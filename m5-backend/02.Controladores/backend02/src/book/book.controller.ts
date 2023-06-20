import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { IBook } from './book.model';

@Controller('books')
export class BookController {

    //http://localhost:3000/book/
    @Get()
    findAll(): IBook[]  {
        let book1: IBook = {
            id: 1,
            title: 'Libro1',
            price: 29.99,
        };
        let book2: IBook = {
            id: 2,
            title: 'Libro2',
            price: 29.99,
        };
        return [book1, book2];
    }

    //findAllById
    /*@Get(':id')
    findById(@Param('id') id: string): IBook {
        console.log(typeof(id));
        return{
            id: parseInt(id, 10),
            title: 'Book',
            price: 30.0
        }

    }*/

    //http://localhost:3000/book/1
    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): IBook {
        console.log(typeof(id)); //number
        return{
            id: id,
            title: 'Book',
            price: 30.0
        }

    }

    //Post create() http://localhost:3000/books

    @Post()
    create(@Body() book: IBook): IBook{ // añadir auto validación
    
        book.id=1;
        //Validar el libro
        //si es correcto => this.bookServicesave
        //Si no es correcto => throw new BadRequestException('El libro no es correcto):// 400
        return book;
    }

    //Actualizar Put http://localhost:3000/books

    @Put()
    update(@Body() book: IBook):IBook { // añadir auto validación
        //Buscar si existe el libro
        //let bookFromDB
        if (true) // si no hay libro no actualizamos
        throw new NotFoundException('Book not found');//404
        //Actualizar en base de datos, buscar libro por id, si no encuentra poner error
        // book = this.bookService.save(book)
        return book;//200
    }

    @Delete(':id')
    @HttpCode(204)//Cambia el status a 200 por defecto a 204
    deleteById(@Param('id', ParseIntPipe)id: number){
        console.log('deleteById ' + id)
        if(false)// si no hay libro no actualizamos
        throw new NotFoundException('Book not found, cant update');//404

        try{
            //this.vookService.deleteById(id)
        }catch (error) {
            throw new ConflictException('No de puede borrar el libro')
        }
    }

}
