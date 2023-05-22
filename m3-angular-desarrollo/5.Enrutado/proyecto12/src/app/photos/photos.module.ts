import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';


@NgModule({
  declarations: [
    PhotoGalleryComponent,
    PhotoDetailComponent,
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
