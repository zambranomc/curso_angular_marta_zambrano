//Gestor de eventos

import { IEvent } from "./event.model";
import { EventService } from "./event.service";

const eventService = new EventService();

//Agenda vacia (array)
console.log(eventService.findAll());

//Crear evento
let event1: IEvent = {
    id: -1,
    title: "Evento 1 fiesta comunion",
    priority: "Baja",
    fecha: new Date(),
    descripcion: "Fiesta comunion"

}

console.log(eventService.save(event1));

