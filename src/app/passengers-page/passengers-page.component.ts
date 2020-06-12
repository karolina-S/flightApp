import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers-page',
  templateUrl: './passengers-page.component.html',
  styleUrls: ['./passengers-page.component.scss']
})
export class PassengersPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
