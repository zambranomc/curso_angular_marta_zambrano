/**
Crear una clase MovieDatabase que tenga una estructura de datos de objetos Movie y métodos para
insertar, actualizar, borrar y consultar películas sobre esa estructura de datos.
 */

import { IMovie } from "./movie";

//1.Clase MovieDataBase

export class MovieDataBase{

//2. Array para guardar los Id de Movie y Método para Generar Id unico para cada película 
public movieDB: Array<IMovie> = [];

public generateNextId(): number{
    let maxId = 0;
    for (const movieDB of this.movieDB) {
            if (movieDB.id > maxId)
                maxId = movieDB.id;
        }
        return  ++maxId;
}

//2. Método para  guardar los Id de Movie  

public save(movie: IMovie): IMovie {
    if (movie.id !== -1)
        throw new Error("Para crear un nuevo evento se coloca en id valor -1");
    //Genera id único
    movie.id = this.generateNextId();

    //Guardar la película en el array movieDB
    this.movieDB.push(movie);
    return movie;
}



//Metodo para mostrar todos los datos del array
imprimirTodo(){
    this.movieDB.forEach(film => {
        console.log(film);
    });
}

//Metodo Actualizar pelicula ya registarda

public actualizar(pelicula: IMovie): IMovie {
    if(!pelicula.id)
        throw new Error("El id tiene que ser válido");

    let position = this.movieDB.findIndex(peliculaActual => peliculaActual.id === pelicula.id);

    if (position === -1)
        throw new Error("404 not found");

    
    this.movieDB[position].title = pelicula.title;
    this.movieDB[position].year = pelicula.year;
    this.movieDB[position].director = pelicula.director;
    this.movieDB[position].duration = pelicula.duration;
    this.movieDB[position].genres = pelicula.genres;
    this.movieDB[position].rate = pelicula.rate;

    return pelicula;
}

//Metodo filtrar por id
public filtrarPorId(peliculaId: number): Array<IMovie>{
    return this.movieDB.filter(filmId => filmId.id === peliculaId);
}


//Metodo para consultar por director con filtro sobre director en IMovie

public filtrarPorDirector(directorName: string): Array<IMovie>{
    return this.movieDB.filter(nombreDirector => nombreDirector.director === directorName);
}

//Filtrar por año de la peícula en el array

public filtrarPorYear(movieYear: number): Array<IMovie>{
    return this.movieDB.filter(peliculaYear => peliculaYear.year === movieYear);
}


//Método para borrar por id

public borrarPorId(id: number): Array<IMovie>{
    let peliculaIndex = this.movieDB.findIndex(pelicula => pelicula.id === id);
    return this.movieDB.splice(peliculaIndex,1);

}





}