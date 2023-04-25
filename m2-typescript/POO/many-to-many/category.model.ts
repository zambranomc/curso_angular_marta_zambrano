//Interfaz ICategory
//Genero de pelicula: comedia, acción, terror, drama, ciencia ficcion

import { IFilm } from "./film.model";

export interface ICategory{
    id: number,
    fullName: string;
    color: string;
    minAge: number;
    films?: IFilm[]
}