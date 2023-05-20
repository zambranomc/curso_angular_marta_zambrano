import { Component } from '@angular/core';
import { IUser } from '../user-dir/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user: IUser = {
    fullName: "Pedro Gómez",
      email: "pedrom@gmail.com",
      bio: "Ingeniero",
      avatar: "/assets/img/useravatarhombre.png"

  }

}
