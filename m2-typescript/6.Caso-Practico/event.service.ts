
//opcional: convertir event service en una interfaz y hacer dos clases que lo implemente
//una clase hace las operaciones con array
//Otra hace las operaciones con un set

import { IEvent } from "./event.model";

export class EventService{
    private events: Array<IEvent> = [];
    private let blackwords: string = ['malo', 'prohibido2', 'prohibido3'];

    //Devuelve todos los eventos
    public findAll(): Array<IEvent>{
        return new Array(...this.events); //devolver copia del array events
    }


    //Devuelve un elemento filtrando por id
    public findById(id: number): IEvent | undefined {
        return this.events.find(evento => evento.id === id);
    }

    //Filtro por prioridad o Priority de IEvent
    public findByPriority(prioridad: string): Array<IEvent> {
        return this.events.filter(evento => evento.priority === prioridad); // filter devuelve array
        
    }



    //metodo geberar id
    private generarNuevoId(): number{
        let maxId = 0;
        for (const event of this.events) {
                if (event.id > maxId)
                    maxId = event.id;
            }
            return  ++maxId;
    }

    //update

    public update(event : IEvent): IEvent{
        if(!event.id)
            throw new Error ("El id debe ser valido");

        let position = this.events.findIndex(currentEvent => currentEvent.id === event.id);

        if (position === -1)
            throw new Error ("404 not found");

        if(this.isValid(event))
            this.events[position].title = event.title;
        
        this.events[position].priority = event.priority;
        this.events[position].fecha = event.fecha;
        this.events[position].descripcion = event.descripcion;
        return event;
    }

    // Borrar por id

    public deleteById(event : IEvent): IEvent{

        let position = this.events.findIndex(currentEvent => currentEvent.id === event.id);

        if (position === -1)
            throw new Error ("404 not found");
        // Si lenght es === 0 no se ha borrado nada: false
        //Si lenght es ==== 1 quiere decir que ha borrado el objeto
        //si lenght >1 quiere decir hay mas de un objeto
        return this.events.splice(position,1).length === 1;
    }


    //Metodo guardar el Array
    public save(event: IEvent): IEvent{
        if(event.id !== -1)
           throw new Error("Para crear un evento no se añade id");//Hacer un bloque para resolver el error y no falla el programa
        
        //Comprobar si existe un evento con igual titulo
        if(!this.isValid(event)) // Si evento es incorrecto devuelve throw
            throw new Error("Datos incorrectos");

        // Generar un id y asignarlo al evento que se quiere guardar
        event.id = this.generarNuevoId();

        //guardar
        this.events.push(event);
        return event;

    }
    private isValid(event: IEvent) {

        //Validacion 1: Que el titulo tenga una longitud entre 10 y 50
        if(event.title.length < 10 || event.title.length > 50)
            return false; //Colocar el false me permite hacer que no siga comprobando porque está mal
        
        //Validacion 2: el titulo del evento no este duplicado (title)
        // el evento del bucle debe ser diferente unico
        for (const currentEvent of this.events) {
            if ( currentEvent.title === event.title)//Si es true indica que el titulo existe
               return false;
        }
        
        //Validacion 3: titulo que no tenga palabra prohibida (title)
        
        for (const word  of this.blackwords) {
            if (event.title.includes(word))
               return false;
        }
        return true; //Todo ok
        
    }
}

