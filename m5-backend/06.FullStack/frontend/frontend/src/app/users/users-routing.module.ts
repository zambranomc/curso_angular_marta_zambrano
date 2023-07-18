import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { AvatarComponent } from './avatar/avatar.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent // http://localhost:4200/users
  },
  {
    path: 'profile',
    component: ProfileComponent // http://localhost:4200/users/profile
  },
  {
    path: 'avatar',
    component: AvatarComponent // http://localhost:4200/users/avatar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
