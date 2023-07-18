import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsFormComponent } from './bookings-form.component';

describe('BookingsFormComponent', () => {
  let component: BookingsFormComponent;
  let fixture: ComponentFixture<BookingsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsFormComponent]
    });
    fixture = TestBed.createComponent(BookingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
