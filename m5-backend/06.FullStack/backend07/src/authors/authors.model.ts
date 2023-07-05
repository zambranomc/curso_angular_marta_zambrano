import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Location } from "src/locations/locations.model";
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

    @Column()
    birthday: Date;

    @Column()
    photo: string;

    @CreateDateColumn({name: 'created_date'})
    createDate: Date;
    
    @UpdateDateColumn({name: 'updated_date'})
    updatedDate: Date;


    //Locations one to one
    //eager true carga de forma temprana la asociacion, 
    //implica que location se carga en las consultas select de author
    @OneToOne(() => Location, {cascade:true, eager: true})//cuidado con eager
    @JoinColumn({name:'id_location'})//obligatorio
    location: Location;
}




