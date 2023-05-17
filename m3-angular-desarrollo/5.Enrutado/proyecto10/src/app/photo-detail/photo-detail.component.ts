import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from '../photo.model';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})

//Inyectar componente, envia datos de un componente a otro, de photo-gallery a photo-detail
export class PhotoDetailComponent implements OnInit{

  photo: IPhoto | undefined;
  photos: IPhoto[] = [{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  }];

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    //Accede al atributo id lo cual me permite hacer una petición a un servicio
      this.route.params.subscribe(params => {
        console.log(params['id']);
        console.log(typeof params['id']);// string
        const id = parseInt(params['id'],10);//indica base 10 (decimal)
        //Busco la foto que corresponda al id
        this.photo = this.photos.find(photo => photo.id === id);

      });
    }
          
      
      
  




}
