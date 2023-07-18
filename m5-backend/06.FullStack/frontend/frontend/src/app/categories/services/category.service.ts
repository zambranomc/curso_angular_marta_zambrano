import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { BASE_URL } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  url:string = `${BASE_URL}/categories`;

  
  constructor(private httpClient: HttpClient) { }

  //metodo que traiga  de url

  findAll(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.url);
  }

//Crear un nuevo objeto todo Event en el servidor
create(category: ICategory): Observable<ICategory>{
  return this.httpClient.post<ICategory>(this.url, category);
}


  //Filtrar por una url determinada

  findById(id: number): Observable<ICategory>{
    return this.httpClient.get<ICategory>(`${this.url}/${id}`);
  }

  
  //Update modificar algo que existe
  update(category: ICategory): Observable<ICategory>{
    return this.httpClient.put<ICategory>(`${this.url}/${category.id}`, category);
  }


  //DeleteById

  deleteById(id: number): void{
    this.httpClient.delete(`${this.url}/${id}`);
  }

}
