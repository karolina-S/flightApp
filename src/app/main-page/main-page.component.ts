import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public date = new Date();
  public allowContinuing = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  saveBasicInformation(start, destination, startDate, endDate, adults, children, babies) {
    localStorage.clear();
    console.log(start, destination);
    localStorage.setItem('start', start);
    localStorage.setItem('destination', destination);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('adults', adults);
    localStorage.setItem('children', children);
    localStorage.setItem('babies', babies);
  }

  countries = [{
    'id': '1',
    'name': 'Poznań'
  },
  {
    'id': '2',
    'name': 'Katowice'
  },
  {
    'id': '3',
    'name': 'Warszawa'
  },
  {
    'id': '4',
    'name': 'Lublana'
  },
  {
    'id': '5',
    'name': 'Mediolan'
  },
  {
    'id': '6',
    'name': 'Dubrovnik'
  },
  {
    'id': '7',
    'name': 'Toronto'
  },
  {
    'id': '8',
    'name': 'Nowy Jork'
  },
  {
    'id': '9',
    'name': 'Los Angeles'
  }]
}