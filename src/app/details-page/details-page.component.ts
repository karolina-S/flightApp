import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public startInput;
  constructor() { }

  ngOnInit(): void {
    this.destinationFill();
  }

  // autouzupełnianie inputów nazwami krajów
  destinationFill() {
    this.startInput = document.getElementById('start');
    this.startInput.setAttribute('value', localStorage.getItem('start'));
    this.startInput = document.getElementById('destination');
    this.startInput.setAttribute('value', localStorage.getItem('destination'))
  }

}
