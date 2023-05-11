import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { IEvent } from '../event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit{
 

  title: string = "";
  createdEvent: IEvent | undefined;

  eventToUpdate: IEvent | undefined;
  titleToUpdate: string = "";

  
  constructor(private eventService: EventService) { }

// Se ejecuta siempre de forma automatica al entrar
  ngOnInit(): void {
   
    // recuperar IEvent por Id 1

    this.eventService.findById(1).subscribe(data => {
      this.eventToUpdate = data;
      this.titleToUpdate = this.eventToUpdate.title;
    });

  }  
 
    //Cargar titulo del IEvent 1 en el formulario y actualizar
  
  create(): void{

    let event: IEvent = {
      userId: 1,
      id: undefined,
      title: this.title,
      completed: false
    }
    this.eventService.create(event).subscribe(data => this.createdEvent = data);
    this.title = "";
  }
 //Llamar a metodo Update y create de service
  update(): void{
    
    if (!this.eventToUpdate) return; // si no hay evento salimos
      
      this.eventToUpdate.title = this.titleToUpdate;
      this.eventService.update(this.eventToUpdate).subscribe(data => console.log(data));
    
  }


  
}
