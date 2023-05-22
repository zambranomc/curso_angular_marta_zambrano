import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-detail',
    component: UserDetailComponent
  },
  {
    path: '', redirectTo: 'user-list', pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'user-list', pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
