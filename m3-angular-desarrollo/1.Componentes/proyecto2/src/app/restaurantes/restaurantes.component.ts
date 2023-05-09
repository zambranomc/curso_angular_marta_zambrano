import { Component } from '@angular/core';
import { IRestaurantes } from './restaurante.modelo';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {
    restaurante1: IRestaurantes = {
      nombre: 'Marisquería',
      calle: 'Corazón de María 67',
      abierto: false
    }
}
