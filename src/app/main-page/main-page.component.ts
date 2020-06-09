import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saving(start, destination) {
    localStorage.clear();
    console.log(start, destination);
    localStorage.setItem('start', start);
    localStorage.setItem('destination', destination);
  }

  countries = [{
    'id': 'poznan',
    'name': 'Poznań'
  },
  {
    'id': 'katowice',
    'name': 'Katowice'
  },
  {
    'id': 'warsaw',
    'name': 'Warszawa'
  },
  {
    'id': 'lublana',
    'name': 'Lublana'
  },
  {
    'id': 'milan',
    'name': 'Mediolan'
  },
  {
    'id': 'dubrovnik',
    'name': 'Dubrovnik'
  },
  {
    'id': 'toronto',
    'name': 'Toronto'
  },
  {
    'id': 'newyork',
    'name': 'Nowy Jork'
  },
  {
    'id': 'losangeles',
    'name': 'Los Angeles'
  }]

}