import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: IUser[] = [];

  constructor() { }

  save(user: IUser): void {
    this.users.push(user);
  }

  findByEmail(email: string): IUser | undefined {
    return this.users.find(user => user.email === email);
  }

  findAll(): IUser[] {
    return Array.from(this.users);
  }

  // 1. En el componente UserDetailComponent agregar en el constructor el servicio UserService encapsulado
  // 2. Creamos un input con ngModel en user-detail.component.html
  //Cuando se da el boton lee el input y se crea nuevo objeto usuario, se guarda UserService
  //3. En otro input con ngModel permitir filtrar por email, si el usuario existe
  // lo mostramos, si no existe mostramos texto en rojo no existe

}
