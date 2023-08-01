import { ConflictException, Delete, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pelicula } from './peliculas.model';
import { Repository, ILike, Between, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class PeliculasService {

    constructor(@InjectRepository(Pelicula) private peliculaRepo: Repository<Pelicula>){}

    //Mostrar todas las películas del repositorio
    findAll(): Promise<Pelicula[]>{
        return this.peliculaRepo.find();
    }

    //Mostrar pelicula por id
    findById(id: number): Promise<Pelicula | null>{
        console.log(id);
        return this.peliculaRepo.findOne({
            where:{
                id: id
            }
        });
    }

    //Crear pelicula
    async create(pelicula: Pelicula): Promise<Pelicula>{
        try{
            return await this.peliculaRepo.save(pelicula);
        }catch (error){
            console.log(error.message);
            throw new ConflictException('no se ha podido guardar la película');
        }
    }

    //Actualizar pelicula

    async update(pelicula: Pelicula): Promise<Pelicula> {
        let peliculaFromDB = await this.peliculaRepo.findOne({
            where: {
                id: pelicula.id
            }
        });

        if(!peliculaFromDB) throw new NotFoundException("No se encontró la película");

        try{
            peliculaFromDB.title = pelicula.title;
            peliculaFromDB.director = pelicula.director;
            peliculaFromDB.genero = pelicula.genero;
            peliculaFromDB.edad = pelicula.edad;
            await this.peliculaRepo.update(peliculaFromDB.id, peliculaFromDB);

            return peliculaFromDB;
        }catch(error){
            throw new ConflictException('Error actualizado pelicula');
        }
    }


    async deleteById(id: number): Promise<void>{

            let exist = await this.peliculaRepo.exist({
                where: {
                    id: id
                }
            });

            if(!exist)throw new NotFoundException('No encontrada');

            try{
                await this.peliculaRepo.delete(id);
            }catch (error){
                throw new ConflictException('No se puede borrar');
            }
    }
        
}




