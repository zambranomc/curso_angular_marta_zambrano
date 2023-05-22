/**
 Solución Mi Caso Practico TypeStript
 En un archivo movie.ts crear una interfaz Movie que represente una película con los siguientes
atributos:
• id: number
• title: string
• year: number
• director: string
• duration: number
• genres: string[]
• rate: number
 */

export interface IMovie {

    id: number;
    title: string;
    year: number;
    director: string;
    duration: number;
    genres: string [];
    rate: number;
}