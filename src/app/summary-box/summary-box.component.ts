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
        document.getElementById('popUp').style.display = 'block';
        console.log('dziala')
      }, 180000)
    });

    document.addEventListener("keyup", () => {
      clearInterval(this.timeout);
      this.timeout = setInterval(function () {
        document.getElementById('popUp').style.display = 'block';
        console.log('dziala')
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

    // Details
    // for (let i = 0; i < flightConnections.length; i++) {
    //   if (flightConnections[i].id == this.originCity && flightConnections[i].destinations.id == this.destinationCity) {
    //     this.originCity = flightConnections[i].start.name;
    //     this.destinationCity = flightConnections[i].destinations.name;
    //     if (this.travelOptionChosen === 'basic') {
    //       this.adultsPriceTotal = +(flightConnections[i].price.adults.basic) * 2 * this.adultsNumber
    //       this.childrenPriceTotal = +(flightConnections[i].price.children.basic) * 2 * this.childrenNumber
    //       localStorage.setItem('adultsPrice', this.adultsPriceTotal)
    //       localStorage.setItem('childrenPrice', this.childrenPriceTotal)
    //     }
    //     else if (this.travelOptionChosen === 'plus') {
    //       this.adultsPriceTotal = +(flightDetails[i].price.adults.plus) * 2 * this.adultsNumber
    //       this.childrenPriceTotal = +(flightDetails[i].price.children.plus) * 2 * this.childrenNumber
    //       localStorage.setItem('adultsPrice', this.adultsPriceTotal)
    //       localStorage.setItem('childrenPrice', this.childrenPriceTotal)
    //     }
    //     else if (this.travelOptionChosen === 'premium') {
    //       this.adultsPriceTotal = +(flightDetails[i].price.adults.premium) * 2 * this.adultsNumber
    //       this.childrenPriceTotal = +(flightDetails[i].price.children.premium) * 2 * this.childrenNumber
    //       localStorage.setItem('adultsPrice', this.adultsPriceTotal)
    //       localStorage.setItem('childrenPrice', this.childrenPriceTotal)
    //     }
    //     this.babiesPriceTotal = +(flightDetails[i].price.babies) * this.babiesNumber
    //     localStorage.setItem('babiesPrice', this.babiesPriceTotal)
    //   }
    // }

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

