import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

//Cargar componentes con enrutado Opcion 1
const routes: Routes = [
  {
    path:'', //pagina home/pagina inicio
    component: PhotoGalleryComponent
  },
  {
    path:'photo-detail', 
    component: PhotoDetailComponent
  },
  {
    path:'photo-form', 
    component: PhotoFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
