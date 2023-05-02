/**
Crear un archivo main.ts que cree una instancia de MovieDatabase y ejecute los métodos de insertar,
actualizar, borrar y consultar películas.
Nota: al estar cada película identificada por un id, se puede usar el id para buscar, actualizar o
borrar una película. Intentar generar el id automáticamente con un método generateNextId()
 */

import { IMovie } from "./movie";
import { MovieDataBase } from "./movieDataBase";


//Crear objetos importando las clase MovieDataBase

const movieDataBase = new MovieDataBase();
let movie1: IMovie ={
    id: -1,
    title: 'Pelicula 1',
    year: 2023,
    director: 'Director 1',
    duration: 120,
    genres: ['accion'],
    rate: 3
}

let movie2: IMovie ={
    id: -1,
    title: 'Pelicula 2',
    year: 2020,
    director: 'Director 2',
    duration: 90,
    genres: ["drama"],
    rate: 2
}

let movie3: IMovie = {
    id: -1,
    title: "Peli 3",
    year: 2010,
    director: "Dir 3",
    duration: 110,
    genres: ['infantil'],
    rate: 5
}
console.log('-------------------------');
//Comprobacion del metodo save  para guardar peliculas 
//y la generación de "id" unico para cada pelicula

console.log(`Peliculas guardas en el array de películas con metodo save y 
metodo imprimirTodo para mostar el array`);

movieDataBase.save(movie1);

movieDataBase.save(movie2);

movieDataBase.save(movie3);

console.log(movieDataBase.imprimirTodo());


//Comprobacion del metodo filtrar por director 
console.log('-------------------------');
console.log('Filtrar por director en el array de películas con metodo filtrarPorDirector -> Dir 3');
console.log(movieDataBase.filtrarPorDirector('Dir 3'));

//Filtrar por año
console.log('-------------------------');
console.log('Filtrar por año en el array de películas con metodo filtrarPorYear -> 2020');
console.log(movieDataBase.filtrarPorYear(2020));

//Actualizar pelicula con metodo actualizar
//Creo el objeto que se utilizará para actualizar el array

let peliActualizada : IMovie = {
    id: 1,
    title: "Titulo Actualizado",
    year: 2000,
    director: "Dir Actualizado",
    duration: 80,
    genres: ['humor'],
    rate: 5
}
console.log('-------------------------');
console.log('Datos de la pelicula que se actualiazará con el metodo actualizar y id = 1');
console.log(peliActualizada);
//Metodo actualizar
movieDataBase.actualizar(peliActualizada);
console.log('-------------------------');
console.log(`Con método filtar por id = 1 en base de datos movieDataBase, 
compruebo que los datos son los de peliActualizada`);
//Metodo filtra por id
console.log(movieDataBase.filtrarPorId(1));

//Método para borrar por id
console.log('-------------------------');
console.log(`Con método borrar por id = 1 en base de datos movieDataBase elimino el id = 3, 
compruebo que los datos se han eliminado con imprimir todo no aparece id = 3`);
movieDataBase.borrarPorId(3);
console.log(movieDataBase.imprimirTodo());