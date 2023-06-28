import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";


@Entity()
export class Editorial{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, length: 9})
    cif: string;

    @Column()
    name: string;

    @CreateDateColumn({name: 'created_date'})
    createDate: Date;

    @Column()
    foundationYear: number;

}