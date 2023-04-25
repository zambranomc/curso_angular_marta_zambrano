import { IAddress } from "./address.model";
import { IUser } from "./user.model";

//Crear objetos importando las clases modelo para usuario y direccion
//Objetos de clase IAddress
let address1: IAddress = {
    id: 1,
    street: "Sainz de Baranda",
    postalCode: "28009",
    city: "Madrid",
    country: "España"
}

let address2: IAddress = {
    id: 2,
    street: "Mendez Alvaro",
    postalCode: "28045",
    city: "Paris",
    country: "Francia"
}

//Objetos de clase IUsers

let user1: IUser = {
    id: 1,
    email: "mmm@gmail.com",
    birthday: new Date(2002-1-2),
    phone: "12345",
    address: address1
}

//Prueba de objetos creados

console.log(`El usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);

//Cambio de datos del atributo address del objeto user1 con nueva asignacion
user1.address = address2;

//Prueba de objetos creados
console.log(`El usuario ${user1.email} vive en ${user1.address.city} de ${user1.address.country}`);


// crear un objeto dentro de otro

let user2: IUser ={
    id: 2,
    email: "sss@gmail.com",
    birthday: new Date(1990-1-1),
    phone: "123456",
    address: {
        id: 3,
        street: ""
    }
}