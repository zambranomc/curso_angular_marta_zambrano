import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.model';
import { Repository, ILike, Between, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(Book) private bookRepo: Repository<Book>
    ){}

    findAll(): Promise<Book[]>{
        return this.bookRepo.find();
    }

    findById(id: number): Promise<Book |null>{
        //Select * From
        console.log(id);
        return this.bookRepo.findOne({
            where: {
                id: id
            }
        });
    }

 
    findAllByTitleEquals(title: string): Promise<Book[]> {
        console.log(title);
        return this.bookRepo.find({
            where: {
                title: title
            }
        });
    }  
    //Busca que contenga una palabra con % donde coincide
    findAllByTitleLike(title: string): Promise<Book[]> {
        console.log(title);
        return this.bookRepo.find({
            where: {
                title: ILike(`%${title}%`)
            }
        });
    }  


    //Filtro por rango de precios

    findAllByPriceBetween(minPrice: number, maxPrice: number): Promise<Book[]>{
        console.log(minPrice);
        console.log(maxPrice);

        return this.bookRepo.find({
            where:{
                price: Between(minPrice, maxPrice)
            }
        });
    }

    //Filtro por publicado 

    findAllByPublishedTrue(): Promise<Book[]>{
        return this.bookRepo.find({
            where: {
                published: true
            }
        });
    }

    //findAllBy QuantityAndPrice()

    findAllByQuantityAndPrice(quantity: number, price: number): Promise<Book[]>{
        return this.bookRepo.find({
            where: {
                quantity: MoreThanOrEqual(quantity),
                price: MoreThanOrEqual(price)
            }
        });
    }

    //Metodo
    
    findAllOrderByPriceAsc(): Promise<Book[]>{
        return this.bookRepo.find({
            order:{
                price: "ASC"
            }
        });

    }



}




