import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public startInput;
  public startDate;
  public endDate;
  public adultsNumber;
  public childrenNumber;
  public babiesNumber;

  constructor() {

  }

  ngOnInit(): void {
    this.destinationFill();
  }

  // autouzupełnianie inputów nazwami krajów
  destinationFill() {
    this.startInput = document.getElementById('start');
    this.startInput.setAttribute('value', localStorage.getItem('start'));
    this.startInput = document.getElementById('destination');
    this.startInput.setAttribute('value', localStorage.getItem('destination'));
    this.startDate = localStorage.getItem('startDate');
    this.endDate = localStorage.getItem('endDate');

  }

  saveTravelOption(option) {
    localStorage.setItem('option', option);
    document.getElementById('basic').style.boxShadow = '';
    document.getElementById('plus').style.boxShadow = '';
    document.getElementById('premium').style.boxShadow = '';
    document.getElementById(option).style.boxShadow = "0px 0px 9px 0px grey";
  }


}
