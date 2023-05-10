import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //Constante
  url: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private httpClient: HttpClient) { }
  //metodo que traiga  de url
  findAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  //Filtrar por una url determinada

  findById(id: number): Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`);
  }

  //filtrar tareas terminadas
  //findAllByCompletedTrue() ? completed = true
  //Estructura con parámetreos
  //con 1 parámetro: ? completed = true
  //con 2 parámetro: ? param1= value&parame2=value2
  findAllByCompletedTrue(): Observable<any>{
    return this.httpClient.get(`${this.url}?completed=true`);
  }

  //FindAllByCompletedFalse()
  findAllByCompletedFalse(): Observable<any>{
    return this.httpClient.get(`${this.url}?completed=false`);
  }

  //Save
  //Update
  //DeleteById


}
