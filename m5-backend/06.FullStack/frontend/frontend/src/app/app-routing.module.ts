import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authors',
    loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '', redirectTo: 'books', pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'books', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
