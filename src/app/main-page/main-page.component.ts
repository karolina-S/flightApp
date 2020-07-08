import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { flightConnections } from '../details';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  public options;
  public start = document.getElementById('start');;
  public startCities = document.querySelectorAll('[name="startCity"]');;
  public startCitiesContainer = document.querySelectorAll('.cities-container__item');;
  public startArray = Array.from(this.startCities);;
  public flightConnections;
  public optionsContainer;

  public date = new Date();
  public dayToday = (this.date.getDate() < 9) ? '0' + this.date.getDate() : this.date.getDate();
  public dayTomorrow = this.dayToday < 10 ? '0' + (+this.dayToday + 1) : +this.dayToday + 1;
  public monthToday = ((this.date.getMonth() + 1) < 9 ? '0' + (this.date.getMonth() + 1) : (this.date.getMonth() + 1));
  public yearToday = this.date.getFullYear();
  public dateToday = `${this.yearToday}-${this.monthToday}-${this.dayToday}`;
  public dateTomorrow = `${this.yearToday}-${this.monthToday}-${this.dayTomorrow}`;
  public dateMax = `${this.yearToday + 1}-${this.monthToday}-${+this.dayToday + 7}`;
  public startDateFiled;
  public endDateField;

  public adultPassengers = 1;
  public childrenPassengers = 0;
  public babiesPassengers = 0;

  public originSelected;
  public destinationSelected;
  public originOptionsContainer;
  public destinationOptionsContainer;

  public plane;


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.optionsContainer = document.getElementById('selected_destination');
    this.startDateFiled = document.getElementById('startDate');
    this.endDateField = document.getElementById('endDate');
    this.startDateFiled.setAttribute('value', `${this.dateToday}`)
    this.startDateFiled.setAttribute('min', `${this.dateToday}`)
    this.startDateFiled.setAttribute('max', `${this.dateMax}`)
    this.endDateField.setAttribute('max', `${this.dateMax}`)
    this.originSelected = document.getElementById('selected');
    this.originOptionsContainer = document.getElementById('citiesContainer');

    this.originSelected.addEventListener('click', () => {
      this.originOptionsContainer.classList.toggle('active');
      document.getElementById('selected').style.border = "none"
    });
  }

  getDestinations(start) {
    this.originOptionsContainer.classList.toggle('active');
    this.options = document.getElementById('options');
    this.options.innerHTML = '<div class="cities-container__item-selected" id="destinationSelected">Cel podróży</div>';
    this.destinationSelected = document.getElementById('destinationSelected');
    this.destinationSelected.addEventListener('click', () => {
      document.getElementById('optionsContainer').classList.toggle('active');
    });
    const divGroup = document.createElement('div');
    divGroup.setAttribute('id', 'optionsContainer');
    divGroup.classList.add('cities-container__item-group')
    this.options.appendChild(divGroup);
    localStorage.clear();
    localStorage.setItem('startCity', start);
    for (let i = 0; i < flightConnections.length; i++) {
      if (flightConnections[i].id == start) {
        document.getElementById('selected').innerText = `${flightConnections[i].start}`
        for (let j = 0; j < flightConnections[i].destinations.length; j++) {
          const input = document.createElement('input');
          const label = document.createElement('label');
          const div = document.createElement('div');
          div.classList.add('cities-container__item');
          div.addEventListener('click', function () {
            document.getElementById('destinationSelected').innerText = flightConnections[i].destinations[j].name;
            localStorage.setItem('endCity', flightConnections[i].destinations[j].id);
            document.getElementById('button').classList.remove('disabled');
            document.getElementById('optionsContainer').classList.toggle('active');
            localStorage.setItem('plane', flightConnections[i].destinations[j].plane)
            localStorage.setItem('price', flightConnections[i].destinations[j].price)
          });
          divGroup.appendChild(div);
          div.appendChild(input);
          div.appendChild(label);
          input.setAttribute('type', 'radio');
          input.setAttribute('id', `${flightConnections[i].destinations[j].id}_destination`)
          input.classList.add('radio');
          input.setAttribute('name', 'destinationCity');
          label.textContent = `${flightConnections[i].destinations[j].name} `;
          label.setAttribute('for', `${flightConnections[i].destinations[j].id}_destination`)
        }
      }
    }
  }

  lessAdultPassengers() { this.adultPassengers <= 1 ? null : this.adultPassengers = this.adultPassengers - 1 }
  moreAdultPassengers() {
    (this.adultPassengers >= 9) || ((this.adultPassengers + this.childrenPassengers + this.babiesPassengers) >= 9) ?
      null : this.adultPassengers = this.adultPassengers + 1
  }

  lessChildrenPassengers() { this.childrenPassengers <= 0 ? null : this.childrenPassengers = this.childrenPassengers - 1 }
  moreChildrenPassengers() {
    (this.childrenPassengers >= 9) || ((this.adultPassengers + this.childrenPassengers + this.babiesPassengers) >= 9) ?
      null : this.childrenPassengers = this.childrenPassengers + 1
  }

  lessBabiesPassengers() { this.babiesPassengers <= 0 ? null : this.babiesPassengers = this.babiesPassengers - 1 }
  moreBabiesPassengers() {
    (this.babiesPassengers >= 9) || ((this.adultPassengers + this.childrenPassengers + this.babiesPassengers) >= 9) ?
      null : this.babiesPassengers = this.babiesPassengers + 1
  }

  saveBasicInformation(startDate, endDate) {
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('children', this.childrenPassengers.toString());
    localStorage.setItem('babies', this.babiesPassengers.toString());
    localStorage.setItem('adults', this.adultPassengers.toString());
    this.router.navigate(['/details-page'])
  }

  checkIfDisabled() {
    if (document.getElementById('button').classList.contains('disabled')) {
      document.getElementById('selected').style.border = "2px solid red";
      document.getElementById('destinationSelected').style.border = "2px solid red";
    }
  }

  getEndDate() {
    console.log(this.startDateFiled.value.slice(0, 8), +this.startDateFiled.value.slice(8) + 1)
    this.endDateField.setAttribute('value', `${this.startDateFiled.value.slice(0, 8)}${+this.startDateFiled.value.slice(8) + 1}`)
    this.endDateField.setAttribute('min', `${this.startDateFiled.value.slice(0, 8)}${+this.startDateFiled.value.slice(8) + 1}`)
  }

}