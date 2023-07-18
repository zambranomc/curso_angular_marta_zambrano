import { Column, CreateDateColumn ,Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user-role.enum";


//export enum UserRole{
   // USER = 'user',
   // ADMIN = 'admin'
//}

@Entity()
export class User{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @Column({nullable: true})
    avatarImage?: string;// nombre de la imagen en la carpeta uploads

}
