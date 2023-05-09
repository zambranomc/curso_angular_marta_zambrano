import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
 //Datos
 users: IUser[] = []
 user: IUser | undefined;


  //input ^[ngModel]
  userEmail: string = "";
  searchEmail: string ="";
  searched: boolean = false;

 

  constructor (private userService : UserServiceService) {}

  findByEmail(): void {
      this.user = this.userService.findByEmail( this.searchEmail);
      this.searchEmail = "";
      this.searched = true;
    }

  save(): void{
    let user: IUser = {
      fullname: this.userEmail.split('@')[0],
      email: this.userEmail
    }
    this.userService.save(user);
    this.userEmail = "";
    this.users = this.userService.findAll();
  }

}
