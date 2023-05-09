import { Component } from '@angular/core';
import { IClientes } from './cliente.modelo';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers : IClientes[] = [
    {
      fullName: 'cliente 1',
      email: 'sss@gmail.com',
      phone:'123456789'
    },
    {
      fullName: 'cliente 2',
      email: 'wwww@gmail.com',
      phone:'987456789'
    }
  ]

}
