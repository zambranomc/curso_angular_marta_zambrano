import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { BookingsFormComponent } from './bookings-form/bookings-form.component';

const routes: Routes = [
  {
    path:'',
    component: BookingsListComponent
  },
  {
    path:':bookId/new',
    component: BookingsFormComponent
  },
  {
    path:':id/edit',
    component: BookingsFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
