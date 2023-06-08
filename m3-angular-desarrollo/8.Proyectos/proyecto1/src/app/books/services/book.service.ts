import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string = "http://localhost:3000/books";

  



  constructor(private httpClient: HttpClient) { }

  //metodo que traiga  de url

  findAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.url);
  }

  //filtro por author busca en el array de libros
  // y devuelve los que correponden al Id del author escogido

  findAllByAuthorId(authorId: number):Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}?authorId=${authorId}`);
  }

//Crear un nuevo objeto todo Event en el servidor
  create(event: IBook): Observable<IBook>{
    return this.httpClient.post<IBook>(this.url, event);
}


  //Filtrar por una url determinada

  findById(id: number): Observable<IBook>{
    return this.httpClient.get<IBook>(`${this.url}/${id}`);
  }

  
  //Update modificar algo que existe
  update(event: IBook): Observable<IBook>{
    return this.httpClient.put<IBook>(`${this.url}/${event.id}`,event);
  }


  //DeleteById
  //Opcion 1
 // deleteById(id: number): Observable<{}>{
//  return this.httpClient.delete(`${this.url}/${id}`);
 // }

  //Opcion2 permie obtener respuesta
  httpOptions = {
    observe: 'response' as 'body'
  }
 deleteById(id: number): Observable<HttpResponse<{}>>{
    return this.httpClient.delete<HttpResponse<{}>>(`${this.url}/${id}`, this.httpOptions);
   }




}
