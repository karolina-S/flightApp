import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-choice',
  templateUrl: './seat-choice.component.html',
  styleUrls: ['./seat-choice.component.scss']
})
export class SeatChoiceComponent implements OnInit {
  public seatsFields = document.querySelectorAll('rect');

  constructor() { }

  ngOnInit(): void {
  }

  selectSeats() {
    console.log('działa', this.seatsFields);
    }

}
