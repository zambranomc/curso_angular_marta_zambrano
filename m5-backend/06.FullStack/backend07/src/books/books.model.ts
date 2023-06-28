import { Author } from "src/authors/authors.model";
import { Category } from "src/categories/categories.model";
import { Editorial } from "src/editorials/editorials.model";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";


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

    //Asociación con author ManyToOne

    @ManyToOne(() => Author)
    @JoinColumn({name: 'id-author'})
    author: Author;

    //Asociacion con editorial

    @ManyToOne(() => Editorial)
    @JoinColumn({name: 'idEditorial'})
    editorial: Editorial;

    //Asociacion Manytomany book - category
    @ManyToMany(() => Category, {cascade:true})
    @JoinTable({
        name:'book_category',
        joinColumn:{name: 'id_book'},
        inverseJoinColumn: {name:'id_category'}
    })
    categories: Category[];

}




