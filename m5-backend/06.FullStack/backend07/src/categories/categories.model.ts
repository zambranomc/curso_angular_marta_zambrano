import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";


@Entity()
export class Category{
   
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    name: string;

    @Column({length:300})
    description: string;

    //Campo opcional nullable
    @Column({nullable: true})
    photo?: string;

    @Column({name: 'min_age'})
    minAge: number;

}