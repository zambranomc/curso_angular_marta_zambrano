import { Component } from '@angular/core';
import { IUser } from '../user-dir/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
 displayedColumns: string[] = ['avatar','fullName', 'email', 'actions']

 users: IUser[] = [
  {
    fullName: "Pedro Gómez",
    email: "pedrom@gmail.com",
    bio: "Ingeniero",
    avatar: "https://ui-avatars.com/api/?name=Pedro+Gomez"
  },
  {
    fullName: "María Andara",
    email: "mariaa@gmail.com",
    bio: "Musico",
    avatar: "https://ui-avatars.com/api/?name=Maria+Andara",
  },
  {
    fullName: "Rosa María Andara",
    email: "rosamariaa@gmail.com",
    bio: "Actuario",
    avatar: "/assets/img/useravatarmujer.png",
  }
 ];




}
