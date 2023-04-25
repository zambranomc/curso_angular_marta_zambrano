
//Interfaz para atributos de un usuario, con asociacion
export interface IUser {
    id: number;
    email: string;
    birthday: Date;
    phone: string;
    address: IAddress; // Asociacion one to one unidereccional
}