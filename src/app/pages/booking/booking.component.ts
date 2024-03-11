import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  currentDate: Date | undefined;

  constructor() { }

  ngOnInit(): void {
    // Get the current date
    this.currentDate = new Date();
  }

}
