import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
 
  url:string = "http://localhost:3000/authors";

  

  constructor(private httpClient: HttpClient) { }

  //metodo que traiga  de url

  findAll(): Observable<IAuthor[]> {
    return this.httpClient.get<IAuthor[]>(this.url);
  }

//Crear un nuevo objeto todo Event en el servidor
create(event: IAuthor): Observable<IAuthor>{
  return this.httpClient.post<IAuthor>(this.url, event);
}


  //Filtrar por una url determinada

  findById(id: number): Observable<IAuthor>{
    return this.httpClient.get<IAuthor>(`${this.url}/${id}`);
  }

  
  //Update modificar algo que existe
  update(event: IAuthor): Observable<IAuthor>{
    return this.httpClient.put<IAuthor>(`${this.url}/${event.id}`,event);
  }


  //DeleteById

  deleteById(id: number): void{
    this.httpClient.delete(`${this.url}/${id}`);
  }
}
