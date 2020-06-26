import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  public name1 = localStorage.getItem('firstName_user1');
  constructor() { }

  ngOnInit(): void {
    document.title = "Podsumowanie | Bon Voyage | Zarezerwuj swój lot!"
  }
}
