import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Author{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 50})
    email: string;

    
    @Column({type: 'text'})
    bio: string;

    @CreateDateColumn({name: 'created_date'})
    createDate: Date;
    
    @UpdateDateColumn({name: 'updated_date'})
    updatedDate: Date;
}