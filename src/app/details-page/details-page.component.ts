import { Component, OnInit } from '@angular/core';
import { flightConnections } from '../details'

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public origin = localStorage.getItem('startCity');
  public originCity;
  public destination = localStorage.getItem('endCity');
  public destinationCity;

  public startDate = localStorage.getItem('startDate').split('-').reverse().join('.');
  public endDate = localStorage.getItem('endDate').split('-').reverse().join('.');

  public optionClicked = false;
  public classClicked = false;

  public luggage10kg = 0;
  public luggage20kg = 0;
  public luggage32kg = 0;

  public startTimeThere;
  public endTimeThere;
  public startTimeBack;
  public endTimeBack;

  constructor() {

  }

  ngOnInit(): void {
    document.title = "Wybór taryfy | Bon Voyage | Zarezerwuj swój lot!"
    flightConnections.forEach(city => {
      if (city.id == this.origin) {
        this.originCity = city.start.substr(city.start.length - 4, 3);
        for (let i = 0; i < city.destinations.length; i++) {
          if (city.destinations[i].id == this.destination) {
            this.startTimeThere = city.destinations[i].timeStart;
            localStorage.setItem('startTimeThere', this.startTimeThere);
            this.endTimeThere = city.destinations[i].timeEnd;
            localStorage.setItem('endTimeThere', this.endTimeThere);
          }
        }
      }
    });

    flightConnections.forEach(dest => {
      if (dest.id == this.destination) {
        this.destinationCity = dest.start.substr(dest.start.length - 4, 3);
        for (let i = 0; i < dest.destinations.length; i++) {
          if (dest.destinations[i].id == this.origin) {
            this.startTimeBack = dest.destinations[i].timeStart;
            localStorage.setItem('startTimeBack', this.startTimeBack)
            this.endTimeBack = dest.destinations[i].timeEnd;
            localStorage.setItem('endTimeBack', this.endTimeBack)
          }
        }
      }
    })
  }

  lessLuggage10() { this.luggage10kg <= 0 ? alert("Nieprawidłowa ilość!") : this.luggage10kg = this.luggage10kg - 1 }
  moreLuggage10() { this.luggage10kg >= 5 ? alert("Osiągnięto maksymalną ilość bagażu") : this.luggage10kg = this.luggage10kg + 1 }

  lessLuggage20() { this.luggage20kg <= 0 ? alert("Nieprawidłowa ilość!") : this.luggage20kg = this.luggage20kg - 1 }
  moreLuggage20() { this.luggage20kg >= 5 ? alert("Osiągnięto maksymalną ilość bagażu") : this.luggage20kg = this.luggage20kg + 1 }

  lessLuggage32() { this.luggage32kg <= 0 ? alert("Nieprawidłowa ilość!") : this.luggage32kg = this.luggage32kg - 1 }
  moreLuggage32() { this.luggage32kg >= 5 ? alert("Osiągnięto maksymalną ilość bagażu") : this.luggage32kg = this.luggage32kg + 1 }

  // Saving

  saveTravelOption(option) {
    localStorage.setItem('option', option);
    document.getElementById('basic').style.boxShadow = '';
    document.getElementById('plus').style.boxShadow = '';
    document.getElementById('premium').style.boxShadow = '';
    document.getElementById(option).style.boxShadow = "0px 0px 9px 0px #807a7a";
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
    document.getElementById(classOption).style.boxShadow = "0px 0px 9px 0px #807a7a";
    this.classClicked = true;
    this.optionClicked && this.classClicked ? document.getElementById('button').removeAttribute('disabled') : null;
  }
}