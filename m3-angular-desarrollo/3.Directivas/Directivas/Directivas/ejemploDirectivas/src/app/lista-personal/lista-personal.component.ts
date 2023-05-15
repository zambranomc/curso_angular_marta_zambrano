import { Component, OnInit } from '@angular/core';

interface Persona {
  id: number;
  name: string;
}


@Component({
  selector: 'app-lista-personal',
  templateUrl: './lista-personal.component.html',
  styleUrls: ['./lista-personal.component.css']
})

//Implemento OnInit
export class ListaPersonalComponent implements OnInit{
 
 //Array
  personas: Persona[] = [
    {id: 1, name: 'Alicia'},
    {id: 2, name: 'Pedro'},
    {id: 3, name: 'Rubén'},
    {id: 4, name: 'Diana'},
  ];
buscar: any;
  //Constructor
  constructor(){}

  //Metodo
  ngOnInit(): void {}



}
