import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { IBooking } from '../booking.model';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {


  displayedColumns: string[] = ['price', 'startDate', 'finishDate', 'actions'];

  bookings: IBooking[] = [];

  constructor(private bookingService: BookingService){}

 

  ngOnInit(): void {
   
    this.bookingService.findAll()
    .subscribe(data => this.bookings = data);
  }

}
