import { Component, OnInit } from '@angular/core';
import { flightDetails } from '../details'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public date = new Date();
  public originCitiesArray = [];
  public destinationCitiesArray = [];
  public adultPassengers = 1;
  public childrenPassengers = 0;
  public babiesPassengers = 0;

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < flightDetails.length; i++) {
      if (this.originCitiesArray.indexOf(flightDetails[i].originCity) == -1) {
        this.originCitiesArray.push(flightDetails[i].originCity);
        console.log(this.originCitiesArray);
      }
    }

    for (let i = 0; i < flightDetails.length; i++) {
      if (this.destinationCitiesArray.indexOf(flightDetails[i].destinationCity) == -1) {
        this.destinationCitiesArray.push(flightDetails[i].destinationCity);
        console.log(this.destinationCitiesArray);
      }
    }
  }

  saveBasicInformation(start, destination, startDate, endDate) {
    localStorage.clear();
    localStorage.setItem('start', start);
    localStorage.setItem('destination', destination);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('children', this.childrenPassengers.toString());
    localStorage.setItem('babies', this.babiesPassengers.toString());
    localStorage.setItem('adults', this.adultPassengers.toString());
  }


  lessAdultPassengers() {
    if (this.adultPassengers <= 1) {
      alert("Nieprawidłowa ilość!");
    } else {
      this.adultPassengers = this.adultPassengers - 1;
    }
  }

  moreAdultPassengers() {
    if ((this.adultPassengers >= 9) || ((this.adultPassengers + this.childrenPassengers + this.babiesPassengers) >= 9)) {
      alert("Osiągnięto maksymalną ilość osób");
    } else {
      this.adultPassengers = this.adultPassengers + 1;
    }
  }

  lessChildrenPassengers() {
    if (this.childrenPassengers <= 0) {
      alert("Nieprawidłowa ilość!");
    } else {
      this.childrenPassengers = this.childrenPassengers - 1;
    }
  }

  moreChildrenPassengers() {
    if ((this.childrenPassengers >= 9) || ((this.adultPassengers + this.childrenPassengers + this.babiesPassengers) >= 9)) {
      alert("Osiągnięto maksymalną ilość osób");
    } else {
      this.childrenPassengers = this.childrenPassengers + 1;
    }
  }

  lessBabiesPassengers() {
    if (this.babiesPassengers <= 0) {
      alert("Nieprawidłowa ilość!");
    } else {
      this.babiesPassengers = this.babiesPassengers - 1;
    }
  }

  moreBabiesPassengers() {
    if ((this.babiesPassengers >= 9) || ((this.adultPassengers + this.childrenPassengers + this.babiesPassengers) >= 9)) {
      alert("Osiągnięto maksymalną ilość osób");
    } else {
      this.babiesPassengers = this.babiesPassengers + 1;
    }
  }
}