//Interfaz IProduct

import { ISupermarket } from "./supermarket.model";


//Interface IProduct

// Asociación Many Products to One Supermarket (Many to One)
export interface IProduct {
    id: number;
    title: string;
    price: number;
    quantity: number;
    supermarket?: ISupermarket; //One to Many
}