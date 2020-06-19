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
  public luggage10kg = 0;
  public luggage20kg = 0;
  public luggage32kg = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.destinationFill();
  }

  // Autouzupełnianie inputów nazwami krajów
  destinationFill() {
    this.startInput = document.getElementById('start');
    this.startInput.setAttribute('value', localStorage.getItem('start'));
    this.startInput = document.getElementById('destination');
    this.startInput.setAttribute('value', localStorage.getItem('destination'));
    this.startDate = localStorage.getItem('startDate');
    this.endDate = localStorage.getItem('endDate');
  }

  // Adding and removing luggage
  lessLuggage10() {
    if (this.luggage10kg <= 0) {
      alert("Nieprawidłowa ilość!");
    } else {
      this.luggage10kg = this.luggage10kg - 1
    }
  }

  moreLuggage10() {
    if (this.luggage10kg >= 5) {
      alert("Osiągnięto maksymalną ilość bagażu");
    } else {
      this.luggage10kg = this.luggage10kg + 1;
    }
  }

  lessLuggage20() {
    if (this.luggage20kg <= 0) {
      alert("Nieprawidłowa ilość!");
    } else {
      this.luggage20kg = this.luggage20kg - 1
    }
  }

  moreLuggage20() {
    if (this.luggage20kg >= 5) {
      alert("Osiągnięto maksymalną ilość bagażu");
    } else {
      this.luggage20kg = this.luggage20kg + 1;
    }

  }

  lessLuggage32() {
    if (this.luggage32kg <= 0) {
      alert("Nieprawidłowa ilość!");
    } else {
      this.luggage32kg = this.luggage32kg - 1
    }
  }

  moreLuggage32() {
    if (this.luggage32kg >= 5) {
      alert("Osiągnięto maksymalną ilość bagażu");
    } else {
      this.luggage32kg = this.luggage32kg + 1;
    }
  }

  // Saving

  saveTravelOption(option) {
    localStorage.setItem('option', option);
    document.getElementById('basic').style.boxShadow = '';
    document.getElementById('plus').style.boxShadow = '';
    document.getElementById('premium').style.boxShadow = '';
    document.getElementById(option).style.boxShadow = "0px 0px 9px 0px grey";
  }

  saveLuggage() {
    localStorage.setItem('luggage10', this.luggage10kg.toString());
    localStorage.setItem('luggage20', this.luggage20kg.toString());
    localStorage.setItem('luggage32', this.luggage32kg.toString());
  }
}
