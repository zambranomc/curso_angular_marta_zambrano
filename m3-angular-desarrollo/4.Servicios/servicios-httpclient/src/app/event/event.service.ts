import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //Constante
  url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { }
  //metodo que traiga  de url
  findAll(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>(this.url);
  }

//Crear un nuevo objeto todo Event en el servidor
create(event: IEvent): Observable<IEvent>{
  return this.httpClient.post<IEvent>(this.url, event);
}


  //Filtrar por una url determinada

  findById(id: number): Observable<IEvent>{
    return this.httpClient.get<IEvent>(`${this.url}/${id}`);
  }

  //filtrar tareas terminadas
  //findAllByCompletedTrue() ? completed = true
  //Estructura con parámetreos
  //con 1 parámetro: ? completed = true
  //con 2 parámetro: ? param1= value&parame2=value2
  findAllByCompletedTrue(): Observable<IEvent[]>{
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=true`);
  }

  //FindAllByCompletedFalse()
  findAllByCompletedFalse(): Observable<IEvent[]>{
    return this.httpClient.get<IEvent[]>(`${this.url}?completed=false`);
  }

  //Save
  //Update
  //DeleteById


}
