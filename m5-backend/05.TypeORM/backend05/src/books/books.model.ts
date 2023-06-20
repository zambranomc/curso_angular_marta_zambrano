import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";


@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({unique: true, length:13})
    isbn: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number;

    @CreateDateColumn({name: 'created_date'})
    createDate: Date;

    @Column({type: 'int'})
    quantity: number;

    @Column({type: 'boolean', default: false})
    published: boolean;

}





