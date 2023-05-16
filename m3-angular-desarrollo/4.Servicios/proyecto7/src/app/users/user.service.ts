import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IUser } from './user.model';
import { Observable } from 'rxjs';


/**
 * 
  'body': Esto es el valor por defecto y significa que recibirás el cuerpo de la respuesta

  'response': Esto te dará acceso completo al objeto HttpResponse, 
      que incluye tanto el cuerpo de la respuesta como metadatos adicionales, 
      como el estado de la respuesta y los headers

    observe: tiene por defecto valor 'body' para traer solo los datos
  */
 
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Variables
  url: string = "https://jsonplaceholder.typicode.com/users";

  //Body valor por defecto y recibirás el cuerpo de la respuesta
  //response: daacceso al objeto response, incluye  el cuerpo y metadatos
  httpOptions = {
    observe: 'response' as 'body'
  }
  
  constructor(private httpClient: HttpClient) {}



    findAll(): Observable<HttpResponse<IUser[]>>{
      return this.httpClient.get<HttpResponse<IUser[]>>(this.url, this.httpOptions);
    }

}
