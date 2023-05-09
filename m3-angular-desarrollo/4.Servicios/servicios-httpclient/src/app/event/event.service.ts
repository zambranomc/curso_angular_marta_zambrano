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



}
