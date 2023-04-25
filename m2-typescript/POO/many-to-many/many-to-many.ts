//Crear objetos

import { ICategory } from "./category.model";
import { IFilm } from "./film.model";

//Many to many : ICategory tiene un array de IFilm, 
//IFilm tiene un array ICategory
let comedia: ICategory ={
    id: 1,
    fullName: "Comedia Española",
    color: "amarillo",
    minAge: 7,
    films: []
    
}

let drama: ICategory = {
    id: 2,
    fullName: "Drama",
    color: "Rojo",
    minAge: 12,
    films: []
}

let titanic: IFilm = {
    id: 1,
    title: "Titanic",
    minutos: 120,
    rating: 9.9,
    year: 1997,
    categories: [comedia, drama] //Mamy
}

let aTodosGas: IFilm = {
    id: 2,
    title: "A Todo Gas 1",
    minutos: 120,
    rating: 5.1,
    year: 1990,
    categories: [comedia, drama]
}


//Bidireccional

if(comedia.films !== undefined)
   comedia.films.push(titanic);



comedia.films?.push(titanic);
console.log(comedia);