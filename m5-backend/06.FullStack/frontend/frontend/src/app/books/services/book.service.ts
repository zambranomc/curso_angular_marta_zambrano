import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../models/book.model';
import { BASE_URL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class BookService {

 

  url:string = `${BASE_URL}/books`;

  constructor(private httpClient: HttpClient) { }

  //metodo que traiga  de url

  findAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.url);
  }

  //Metodo del controller
  findAllWhithRelations(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}/load-relations`);
  }

  //filtro por author busca en el array de libros
  // y devuelve los que correponden al Id del author escogido

  findAllByAuthorId(authorId: number):Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.url}/author/${authorId}`);
  }

  //Filtro  por categorias
  //http://localhost:3000/books?categories_like=3

  findAllByCategoryId(categoryId: number): Observable<IBook[]>{
    return this.httpClient.get<IBook[]>(`${this.url}?categories_like=${categoryId}`);
  }


  //Filtrar por una url determinada

  findById(id: number): Observable<IBook>{
    return this.httpClient.get<IBook>(`${this.url}/id/${id}`);
  }

  //Crear un nuevo objeto todo Event en el servidor
  create(book: IBook): Observable<IBook>{
    return this.httpClient.post<IBook>(this.url, book);
}

  
  //Update modificar algo que existe
  update(book: IBook): Observable<IBook>{
    return this.httpClient.put<IBook>(`${this.url}`, book);
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
