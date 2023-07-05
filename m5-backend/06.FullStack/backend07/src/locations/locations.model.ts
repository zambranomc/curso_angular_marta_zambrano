import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";


@Entity()
export class Location{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;
    
    @Column()
    city: string;

    @Column({name: 'postal_code'})
    postalCode: string;

    @Column()
    country: string;

    @CreateDateColumn({name: 'created_date'})
    createdDate: Date;
    

}