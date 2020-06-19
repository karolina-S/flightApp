import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers-page',
  templateUrl: './passengers-page.component.html',
  styleUrls: ['./passengers-page.component.scss']
})
export class PassengersPageComponent implements OnInit {

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

  savePersonalData(gender, firstName, familyName, emailAddress, phoneNumber) {
    console.log(gender, firstName, familyName, emailAddress, phoneNumber);
    localStorage.setItem('gender', gender);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('familyName', familyName);
    localStorage.setItem('emailAddress', emailAddress);
    localStorage.setItem('phoneNumber', phoneNumber);
  }

}
