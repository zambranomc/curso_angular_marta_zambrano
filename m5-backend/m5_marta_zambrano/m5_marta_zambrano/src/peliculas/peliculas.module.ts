import { Module } from '@nestjs/common';
import { PeliculasController } from './peliculas.controller';
import { PeliculasService } from './peliculas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './peliculas.model';

@Module({
  imports:[TypeOrmModule.forFeature([Pelicula])], //Tabla peliculas
  controllers: [PeliculasController],
  providers: [PeliculasService]
})
export class PeliculasModule {}
