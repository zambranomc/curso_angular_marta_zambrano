import { Book } from "src/books/books.model";
import { User } from "src/users/users.model";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";



@Entity()
export class Booking{
    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> User)
    @JoinColumn({name: 'id-user'})
    user: User;

    @ManyToOne(()=> Book)
    @JoinColumn({name: 'id-book'})
    book: Book;

    @Column({default: 5})
    price: number;

    @Column()
    startDate: Date;

    @Column()
    finishDate: Date;



}