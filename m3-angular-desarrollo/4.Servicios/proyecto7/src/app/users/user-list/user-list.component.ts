import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  error: string = "";
  
  constructor(private userService: UserService){}

  ngOnInit(): void {
  
  //Opción1: función next simple
  //this.userService.findAll().suscribe(data => this.users = data.body ?? []);

  //Opción 2: función next bloque{}
    //this.userService.findAll().subscribe(data => {
      //console.log(data);
      //console.log(data.status);
      //console.log(data.body);
      //this.users = data.body ?? [];
    //});

    //Ver suscribe con varios argumentos: next, error, complete
    //la primera función se ejecuta si todo va bien, si no va la segunda
    //Opción 3: función next (obligatorio), funcion error (opcional), complete (opcional)
   
    //this.userService.findAll().subscribe({
    //  next: data => this.users = data.body ?? [],
    //  error: (err: Error) => console.log("Error:" + err.message),
    //  complete: () => console.log("findAll completado"),
    //});

    //Opcion 4: funciones con bloques
    this.userService.findAll().subscribe({
      next: (data: HttpResponse<IUser[]>) => {
        console.log(data.status);
        this.users = data.body ?? [];
      },
      error: (err: Error) => {
        console.error("Error:" + err.message);
        this.showError(err);
        },
      complete: () => console.log("findAll completado"),
    });

    }
showError(err: Error) {
    this.error = err.message;
    setTimeout(() => this.error = "",5000);
  }
  

}
