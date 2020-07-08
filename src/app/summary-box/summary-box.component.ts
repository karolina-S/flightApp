import { Component, OnInit } from '@angular/core';
import { flightConnections } from '../details'

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.scss']
})
export class SummaryBoxComponent implements OnInit {
  public originCity;
  public origin = localStorage.getItem('startCity');
  public destinationCity;
  public destination = localStorage.getItem('endCity');
  public startDate = localStorage.getItem('startDate').split('-').reverse().join('.');
  public endDate = localStorage.getItem('endDate').split('-').reverse().join('.');
  public adultsNumber;
  public childrenNumber;
  public babiesNumber;
  public total;
  public adultsPriceTotal;
  public childrenPriceTotal;
  public babiesPriceTotal;
  public travelOptionChosen = localStorage.getItem('option');
  public travelClass = localStorage.getItem('class');
  public startTimeThere;
  public endTimeThere;
  public startTimeBack;
  public endTimeBack;
  public seatsChosen;
  public seatsPrice;
  public additionalLuggagePrice;
  public totalPrice;
  public luggage10 = localStorage.getItem('luggage10');
  public luggage20 = localStorage.getItem('luggage20');
  public luggage32 = localStorage.getItem('luggage32');
  public currencyChosen;
  public currencyField;

  public timeout;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("mousemove", () => {
      clearInterval(this.timeout);
      this.timeout = setInterval(function () {
        document.getElementById('popUp').style.display = 'block'
      }, 180000)
    });

    document.addEventListener("keyup", () => {
      clearInterval(this.timeout);
      this.timeout = setInterval(function () {
        document.getElementById('popUp').style.display = 'block'
      }, 180000)
    })

    this.startTimeThere = localStorage.getItem('startTimeThere');
    this.endTimeThere = localStorage.getItem('endTimeThere');
    this.startTimeBack = localStorage.getItem('startTimeBack');
    this.endTimeBack = localStorage.getItem('endTimeBack');

    // Number of passengers
    this.adultsNumber = localStorage.getItem('adults');
    this.childrenNumber = localStorage.getItem('children');
    this.babiesNumber = localStorage.getItem('babies');
    this.total = +this.adultsNumber + +this.childrenNumber + +this.babiesNumber;
    this.seatsChosen = localStorage.getItem('seats');

    flightConnections.forEach(origin => {
      origin.id == this.origin ? this.originCity = origin.start : null;
    });
    flightConnections.forEach(destination => {
      destination.id == this.destination ? this.destinationCity = destination.start : null;
    });

    this.totalPrice = `${this.adultsPriceTotal + this.childrenPriceTotal + this.babiesPriceTotal}`

    if (window.location.href.indexOf("passengers-page") > -1) {
      document.getElementById('passengersField').classList.remove('closed');
      document.getElementById('informationField').classList.remove('closed');
    }
    if (window.location.href.indexOf("seat-choice") > -1) {
      document.getElementById('passengersField').classList.remove('closed');
      document.getElementById('informationField').classList.remove('closed');
    }
  }

  showDetails() {
    document.querySelector('.summary-box').classList.toggle('unfold');
    document.querySelector('.summary-box__unfold').classList.toggle('unfold');
  }

  hidePopup() {
    document.getElementById('popUp').style.display = 'none';
  }
}

