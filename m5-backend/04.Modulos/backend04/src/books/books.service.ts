import { Injectable } from '@nestjs/common';
import { IBook } from './books.model';

@Injectable()
export class BooksService {



    private books: IBook[] =[
        {id: 1, title: 'Book 1', price: 49.99, author:{id: 1, name: 'Author 1', city: 'Madrid'}},
        {id: 2, title: 'Book 2', price: 49.99, author:{id: 1, name: 'Author 1', city: 'Madrid'}},
        {id: 3, title: 'Book 3', price: 49.99, author:{id: 2, name: 'Author 1', city: 'Barcelona'}},
        {id: 4, title: 'Book 4', price: 49.99, author:{id: 2, name: 'Author 1', city: 'Barcelona'}},
    ];

    constructor(){
    }

    //Mostrar todos los libros del array
    findAll(): IBook[] {
        return this.books;
    }

    //Encuentra un libro por id
    findById(id: number): IBook | undefined {
        return this.books.find(book => book.id === id); // find devuelve el libro por id
    }

    //Bucar por titulo
    findAllByTitleContains(title: string): IBook[] {
        return this.books.filter(book =>
            book.title.toLowerCase().includes(title.toLowerCase()
            ));
    }

    //Metodo que relaciona modulo book y author Asociación muchos a uno
    findAllByAuthorId(authorId:number): IBook []{
        return this.books.filter(book => book.author.id === authorId);
    }

    //Subir el libro al array
    public save(book: IBook): IBook{
        this.books.push(book);
        return book;
    }

    public update(book: IBook): IBook {
        let position = this.books.findIndex(
            current => current.id === book.id
        );
        if (position === -1)
            throw new Error("404 not found");

        this.books[position].title = book.title;
        this.books[position].price = book.price;
        return book;
    }

    public deleteById(id: number): boolean {
        let position = this.books.findIndex(
            current => current.id === id
        );
        if (position === -1)
            throw new Error("404 not found");
        return this.books.splice(position, 1).length === 1;  
    }

    deleteAll(){
        this.books=[];
    }
}
