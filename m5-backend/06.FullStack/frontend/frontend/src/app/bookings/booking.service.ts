import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../shared/constants';
import { IBooking } from './booking.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url:string = `${BASE_URL}/bookings`;

  constructor(private httpClient: HttpClient) { }

  //metodo que traiga  de url

  findAll(): Observable<IBooking[]> {
    return this.httpClient.get<IBooking[]>(this.url);
  }

  
  //Crear un nuevo objeto todo Event en el servidor
  create(booking: IBooking): Observable<IBooking>{
    return this.httpClient.post<IBooking>(this.url, booking);
}

  
  //Update modificar algo que existe
  update(booking: IBooking): Observable<IBooking>{
    return this.httpClient.put<IBooking>(`${this.url}`, booking);
  }





}
