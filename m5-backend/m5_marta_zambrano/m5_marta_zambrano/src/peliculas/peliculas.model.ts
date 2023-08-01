import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Pelicula{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    director: string;

    @Column()
    genero: string;

    @Column()
    edad: number;


}