import { Component, OnInit } from '@angular/core';
import { flightDetails } from '../details'

@Component({
  selector: 'app-summary-box',
  templateUrl: './summary-box.component.html',
  styleUrls: ['./summary-box.component.scss']
})
export class SummaryBoxComponent implements OnInit {
  public originCity = localStorage.getItem('start');
  public destinationCity = localStorage.getItem('destination');
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
  public startTimeOrigin;
  public endTimeDestination;
  public startTimeDestination;
  public endTimeOrigin;
  public seatsPrice;
  public additionalLuggagePrice;
  public totalPrice;
  public luggage10 = localStorage.getItem('luggage10');
  public luggage20 = localStorage.getItem('luggage20');
  public luggage32 = localStorage.getItem('luggage32');
  public currencyChosen;

  constructor() { }

  ngOnInit(): void {
    // Number of passengers
    this.adultsNumber = localStorage.getItem('adults');
    this.childrenNumber = localStorage.getItem('children');
    this.babiesNumber = localStorage.getItem('babies');
    this.total = +this.adultsNumber + +this.childrenNumber + +this.babiesNumber;

    // Details
    for (let i = 0; i < flightDetails.length; i++) {
      if (flightDetails[i].originCity == this.originCity && flightDetails[i].destinationCity == this.destinationCity) {
        this.startTimeOrigin = flightDetails[i].timeStartOrigin;
        this.endTimeDestination = flightDetails[i].timeEndDestination;
        this.startTimeDestination = flightDetails[i].timeStartDestination;
        this.endTimeOrigin = flightDetails[i].timeEndOrigin;
        if (this.travelOptionChosen === 'basic') {
          this.adultsPriceTotal = +(flightDetails[i].price.adults.basic) * this.adultsNumber
          this.childrenPriceTotal = +(flightDetails[i].price.children.basic) * this.childrenNumber
          localStorage.setItem('adultsPrice', this.adultsPriceTotal)
          localStorage.setItem('childrenPrice', this.childrenPriceTotal)
        }
        else if (this.travelOptionChosen === 'plus') {
          this.adultsPriceTotal = +(flightDetails[i].price.adults.plus) * this.adultsNumber
          this.childrenPriceTotal = +(flightDetails[i].price.children.plus) * this.childrenNumber
          localStorage.setItem('adultsPrice', this.adultsPriceTotal)
          localStorage.setItem('childrenPrice', this.childrenPriceTotal)
        }
        else if (this.travelOptionChosen === 'premium') {
          this.adultsPriceTotal = +(flightDetails[i].price.adults.premium) * this.adultsNumber
          this.childrenPriceTotal = +(flightDetails[i].price.children.premium) * this.childrenNumber
          localStorage.setItem('adultsPrice', this.adultsPriceTotal)
          localStorage.setItem('childrenPrice', this.childrenPriceTotal)
        }
        this.babiesPriceTotal = +(flightDetails[i].price.babies) * this.babiesNumber
        localStorage.setItem('babiesPrice', this.babiesPriceTotal)
      }
    }

    // Prices
    this.totalPrice = this.adultsPriceTotal + this.childrenPriceTotal + this.babiesPriceTotal
  }


}
