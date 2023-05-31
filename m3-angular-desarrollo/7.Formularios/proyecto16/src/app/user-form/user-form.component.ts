import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface ICompany{
  id: number;
  name: string;
}


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  hide=true;

 

  hobbies: string[] = ['sport', 'music', 'travel'];

  companies: ICompany[]= [
    {id:1, name:'Adecco'}, 
    {id:2, name:'Toyota'}, 
    {id:3, name:'IBM'},
    {id:4, name: 'otro'} ];


  userForm = new FormGroup ({
    fullName: new FormControl ('', [Validators.required]),
    bio: new FormControl ('', [Validators.required, Validators.maxLength(256)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isStudent: new FormControl(false),
    acceptCondictions: new FormControl(false, [Validators.requiredTrue]),
    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%/(){8,10}]$')]),
    salary: new FormControl(null, [Validators.min(10000), Validators.max(50000)]),
    department: new FormControl(null, [Validators.required]),
    company: new FormControl('', [Validators.required]),
    hobbies: new FormControl([]),
    city: new FormControl([]),
    postalCode: new FormControl('',[Validators.pattern('^[0-9]{5}$')]),
    birthday: new FormControl(null),
    jobStartDate: new FormControl(null),
    jobEndDate: new FormControl(null)
  });

  save():void{}

}
