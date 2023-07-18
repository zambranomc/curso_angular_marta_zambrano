import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/shared/constants';
import { IUser } from '../user.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  imagePreview: string | undefined;// Para mostrar
  imageFile: File | undefined;//Para subir
  user: IUser | undefined; //traer el usuario y si tiene avatar mostrarlo

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
   this.loadCurrentUser();
  }



 loadCurrentUser() {
    this.httpClient
      .get<IUser>(`${BASE_URL}/users/current`)
      .subscribe(data => this.user = data);
  }

  onFileSelected(event: Event){

    let target = event.target as HTMLInputElement;
    

    if(target.files !== null && target.files.length > 0){
      this.imageFile = target.files[0];
      console.log(this.imageFile);

    //Mostrar la imagen al usuario
    let reader = new FileReader();
    reader.onload = ev => this.imagePreview = reader.result as string;
    reader.readAsDataURL(this.imageFile); //leer la imagen

    }
  }



  save(){
    if(!this.imageFile) return;

    //La imagen no  es un archivo de texto, es binario por lo que necesitamos enviarla
    // a FormData para que se gestione correctamente tambien pdf
    let formData = new FormData();
    formData.append('file', this.imageFile);

    this.httpClient.post(`${BASE_URL}/users/avatar`, formData)
                  .subscribe(data => {
                    //Recargar el usuario con nueva foto y recargar formulario de avatar
                    console.log(data);
                    this.loadCurrentUser();
                    this.imageFile = undefined;
                    this.imagePreview = undefined;
                  });
  }




}
