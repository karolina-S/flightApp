import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public luggage10kg = 0;
  public luggage20kg = 0;
  public luggage32kg = 0;
  public originCity = localStorage.getItem('start');
  public destinationCity = localStorage.getItem('destination');
  public startDate = localStorage.getItem('startDate').split('-').reverse().join('.');
  public endDate = localStorage.getItem('endDate').split('-').reverse().join('.');
  public optionClicked = false;
  public classClicked = false;

  constructor() {

  }

  ngOnInit(): void {
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
    this.optionClicked = true;
    this.optionClicked && this.classClicked ? document.getElementById('button').removeAttribute('disabled') : null;
  }

  saveLuggage() {
    localStorage.setItem('luggage10', this.luggage10kg.toString());
    localStorage.setItem('luggage20', this.luggage20kg.toString());
    localStorage.setItem('luggage32', this.luggage32kg.toString());
  }

  saveClass(classOption) {
    localStorage.setItem('class', classOption);
    document.getElementById('economy').style.boxShadow = '';
    document.getElementById('premiumeconomy').style.boxShadow = '';
    document.getElementById('business').style.boxShadow = '';
    document.getElementById(classOption).style.boxShadow = "0px 0px 9px 0px grey";
    this.classClicked = true;
    this.optionClicked && this.classClicked ? document.getElementById('button').removeAttribute('disabled') : null;
  }
}