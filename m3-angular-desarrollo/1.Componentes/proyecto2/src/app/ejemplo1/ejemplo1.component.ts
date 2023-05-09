import { Component } from '@angular/core';

//Interfaz para crear producto
interface IProduct{
    id: number;
    title: string;
    price: number;
}



@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {
  mensaje : string ="Hola mundo desde ejemplo 1" // Variable
  precio: number = 3.99;

  //Creo objeto de la interfaz IProduct creada arriba

  producto1: IProduct = {
    id: 1,
    title: 'Ordenador portátil Lenovo',
    price: 50.0
  }

  checkPrice(): string {
    //Price <50  devuelve green
    //Price >50 y < 100 devuelve blue
    //Price >=100 devuelve red
    if (this. producto1.price < 50) 
      return "green";
    else if(this.producto1.price <= 100)
      return "blue";
    else if(this.producto1.price>100)
      return "red";
   
  }
  

}
