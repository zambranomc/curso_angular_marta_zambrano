/**
 * Crear una interfaz para definir los atributos de una direccion fisica
 * que pertenece a un usuario: Id, Calle, Portal, Ciudad
 */


//Atributos de interfaz con export
export interface IAddress {
    id: number;
    street: string;
    postalCode: string;
    city: string;
    country: string;
}