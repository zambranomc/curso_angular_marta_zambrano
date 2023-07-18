import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBooking } from '../booking.model';

@Component({
  selector: 'app-bookings-form',
  templateUrl: './bookings-form.component.html',
  styleUrls: ['./bookings-form.component.css']
})
export class BookingsFormComponent implements OnInit{

  bookingForm = new FormGroup({
    id: new FormControl<number>(0),
    price: new FormControl <number>(0, [Validators.required, Validators.min(5), Validators.max(500)]),
    startDate: new FormControl<Date>(new Date()),
    finishDate: new FormControl<Date>(new Date()),
  });

  bookId: number | undefined;

  constructor(private bookingService : BookingService,
              private activatedRoute: ActivatedRoute,
              private router: Router,){}


  ngOnInit(): void {
    console.log('ngOnInit');
    this.activatedRoute.params.subscribe(params => {
      const idString = params['bookId'];
      if(!idString) return;
      this.bookId = parseInt(idString,10);
    });
  }

  save(): void{
    let id = this.bookingForm.get('id')?.value ?? 0;
    let price = this.bookingForm.get('price')?.value ?? 5;
    let startDate = this.bookingForm.get('startDate')?. value ?? new Date();
    let finishDate = this.bookingForm.get('finishDate')?. value ?? new Date();

    let booking: IBooking = {
      id: id,
      price: price,
      startDate: startDate,
      finishDate: finishDate,
      book: {
        id: this.bookId,
        
      }// crear un objeto para pasar la info del libro coloca any en el model para poder asignar
    }
    if(id === 0)
      this.bookingService.create(booking).subscribe(booking => this.router.navigate(['/bookings']));
    else
      this.bookingService.update(booking).subscribe(booking => this.router.navigate(['/bookings']));

  }

}
