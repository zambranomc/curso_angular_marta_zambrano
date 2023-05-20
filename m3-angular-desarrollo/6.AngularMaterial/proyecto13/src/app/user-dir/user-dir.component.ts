import { Component } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user-dir',
  templateUrl: './user-dir.component.html',
  styleUrls: ['./user-dir.component.css']
})
export class UserDirComponent {

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
