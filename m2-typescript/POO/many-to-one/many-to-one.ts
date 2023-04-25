

//Asocición Many to one

import { IProduct } from "./product.model";
import { ISupermarket } from "./supermarket.model";

let mercadona: ISupermarket = {
    id: 1,
    brandName: "Mercadona Industrias SL",
    m2: 150,
    numEmployees: 20,
    products: []
}

let yogures: IProduct = {
    id: 1,
    title: "Yogourt Pastoret",
    price: 2.95,
    quantity: 6,
    supermarket: mercadona
}

let pan: IProduct = {
    id: 2,
    title: "Pan Bimbo",
    price: 2.05,
    quantity: 8,
    supermarket: mercadona
}

//Completar asociacion birideccional
//Desde un producto acceder a un supermercado
//Desde un supermercado puedo acceder a producto
mercadona.products.push(yogures);
mercadona.products.push(pan);


//Crear otro supermercado y pasar los productos directamente
let alimerka: ISupermarket = {
    id: 2,
    brandName: "Alimerka SL",
    m2: 100,
    numEmployees: 10,
    products: [
        //lista Iproducts
        {
            id: 3,
            title: "Sandia",
            price: 9.87,
            quantity: 7,
            //supermarket opcional  con ?  
        },
        {
            id: 4,
            title: "Naranjas",
            price: 0.87,
            quantity: 600
        }
    ]
}

//Unidereccional solo de un lado 
//de la asociación puedo llevar a la otra clase
//Este caso sería donde supermercado puedo llegar a producto, pero de producto no puedo llegar a supermercado
//BIRIDECCIONAL desde ambos lados de la asociación puedo acceder a las clases
//La idea sería que desde producto puedo llegar a supermercado y desde supermercado llego a productos
//Para subir producto manual
//alimerka.products[0].supermarket = alimerka;

//Asignar supermercado  Alimerka a los productos que están dentro de Alimerka
for( const product of alimerka.products)
    product.supermarket = alimerka;


//Foreach
alimerka.products.forEach( product => product.supermarket = alimerka);

//Imprimir atributos de productos con bucle
let prices = alimerka.products.map(product => product.price);
console.log(prices);





