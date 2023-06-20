import { BadRequestException, Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from './books.model';

@Controller('books')
export class BooksController {

    constructor(private bookService: BooksService){}

    @Get()
    findAll(): IBook[] {
        return this.bookService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): IBook{
        let book = this.bookService.findById(id);
        if(!book)
            throw new NotFoundException('No existe');
        return book;
    }

    //Todo findByTitleContains
    @Get('title/:title')
    findAllByTitleContains(@Param('title') title: string): IBook[] {
        if(title.length === 0)
            throw new BadRequestException('Título no puede estar vacío');//400 <La petición se ha realizado mal
        
        return this.bookService.findAllByTitleContains(title);
    }

    // Buscar por author
    @Get('author-id/:authorId')
    findAllByAuthorId(@Param('authorId', ParseIntPipe) authorId: number): IBook[]{
        return this.bookService.findAllByAuthorId(authorId);
    }



    @Post()
    create(@Body() book:IBook): IBook{
        return this.bookService.save(book);
    }

    @Put()
    update(@Body() book:IBook): IBook{
        return this.bookService.update(book);
    }

    @Delete(':id')
    @HttpCode(204)
    deleteById(@Param('id', ParseIntPipe)id: number){
        this.bookService.deleteById(id);
    }

    //Metodo para borrar todo
    @Delete()
    @HttpCode(204)
    deleteAll() {
        //this.bookService.removeRelationships()
        this.bookService.deleteAll();
    }




}
