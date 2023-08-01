import { Body, Controller,  Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from './peliculas.model';

@Controller('peliculas')
export class PeliculasController {

    constructor(private peliculaService: PeliculasService){}

    //http://localhost:3000/peliculas
    @Get()
    findAll(): Promise<Pelicula[]>{
        return this.peliculaService.findAll();
    }

   //http://localhost:3000/peliculas/id/2
    @Get('id/:id')
    findById(@Param("id") id:number): Promise<Pelicula | null>{
        return this.peliculaService.findById(id);
    }

    //Postman - Post
    //http://localhost:3000/peliculas/id/15

    /**
     * Colocar
     * {
        "id": 0,
        "title": "Peli creada de post",
        "director": "Francis Ford Coppola",
        "genero": "Acción",
        "edad": 12
    }
     */

    /** Resultado 
     * {
        "id": 15,
        "title": "Peli creada de post",
        "director": "Francis Ford Coppola",
        "genero": "Acción",
        "edad": 12
    } */
    @Post()
    async create(@Body() pelicula:Pelicula): Promise<Pelicula>{
        return await this.peliculaService.create(pelicula);
    }

    //Postman - Put
    /**{
    "id": 1,
    "title": "El Padrino II actualizado de postman",
    "director": "Francis Ford Coppola",
    "genero": "Drama",
    "edad": 12
} */

    @Put()
    async update(@Body() pelicula: Pelicula): Promise<Pelicula>{
        return await this.peliculaService.update(pelicula);
    }

    //Postman - Delete - Params
    //Http://localhost:3000/peliculas/2

    @Delete(':id')
    async deleteById(
        @Param('id', ParseIntPipe) id:number
    ): Promise<void>{
        return await this.peliculaService.deleteById(id);
    }


    







}
