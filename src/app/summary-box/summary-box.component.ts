import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.scss']
})
export class SummaryBoxComponent implements OnInit {
  public originCity = localStorage.getItem('start');
  public destinationCity = localStorage.getItem('destination');
  public startDate = localStorage.getItem('startDate').split('-').reverse().join('.');
  public endDate = localStorage.getItem('endDate').split('-').reverse().join('.');
  public adultsNumber;
  public childrenNumber;
  public babiesNumber;
  public total;

  constructor() { }

  ngOnInit(): void {
    this.adultsNumber = localStorage.getItem('adults');
    this.childrenNumber = localStorage.getItem('children');
    this.babiesNumber = localStorage.getItem('babies');
    this.total = +this.adultsNumber + +this.childrenNumber + +this.babiesNumber;
  }

}
