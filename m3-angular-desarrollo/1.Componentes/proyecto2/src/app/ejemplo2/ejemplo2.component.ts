import { Component } from '@angular/core';
import { ILaptop } from './laptop.model';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component {

  ordenador1: ILaptop = {
    fabricante: 'MSI',
    modelo: 'Modern 1234',
    ram: 32
  }

  ordenador2: ILaptop ={
    fabricante: 'ASUS',
    modelo: 'A555',
    ram: 16
  }

}
