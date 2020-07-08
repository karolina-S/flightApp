import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public currency = localStorage.getItem('currency');
  constructor(private router: Router) { }

  ngOnInit(): void {

    if (window.location.href.indexOf("details-page") > -1) {
      document.getElementById('navbarStep2').classList.add('current');
      document.getElementById('arrow1').classList.add('current');
      document.getElementById('currencyContainer').style.display = "flex";
    }

    if (window.location.href.indexOf("passengers-page") > -1) {
      document.getElementById('navbarStep2').classList.remove('current');
      document.getElementById('navbarStep2').classList.add('done');
      document.getElementById('navbarStep3').classList.add('current');
      document.getElementById('arrow1').classList.remove('current');
      document.getElementById('arrow1').classList.add('done');
      document.getElementById('arrow2').classList.add('current');
    }

    if (window.location.href.indexOf("seat-choice") > -1) {
      document.getElementById('navbarStep2').classList.remove('current');
      document.getElementById('navbarStep2').classList.add('done');
      document.getElementById('navbarStep3').classList.remove('current');
      document.getElementById('navbarStep3').classList.add('done');
      document.getElementById('navbarStep4').classList.add('current');
      document.getElementById('arrow1').classList.remove('current');
      document.getElementById('arrow1').classList.add('done');
      document.getElementById('arrow2').classList.remove('current');
      document.getElementById('arrow2').classList.add('done');
      document.getElementById('arrow3').classList.add('current');

    }

    if (window.location.href.indexOf("summary-page") > -1) {
      document.getElementById('navbarStep2').classList.remove('current');
      document.getElementById('navbarStep2').classList.add('done');
      document.getElementById('navbarStep3').classList.remove('current');
      document.getElementById('navbarStep3').classList.add('done');
      document.getElementById('navbarStep4').classList.remove('current');
      document.getElementById('navbarStep4').classList.add('done');
      document.getElementById('navbarStep5').classList.add('current');
      document.getElementById('arrow1').classList.remove('current');
      document.getElementById('arrow1').classList.add('done');
      document.getElementById('arrow2').classList.remove('current');
      document.getElementById('arrow2').classList.add('done');
      document.getElementById('arrow3').classList.remove('current');
      document.getElementById('arrow3').classList.add('done');
      document.getElementById('arrow4').classList.add('current');
    }
  }

  changeCurrency(currency) {
    window.location.reload();
    console.log(currency);
    document.getElementById('pln').classList.remove('selected');
    document.getElementById('eur').classList.remove('selected');
    document.getElementById('usd').classList.remove('selected');
    document.getElementById(`${currency}`).classList.add('selected');
    localStorage.setItem('currency', currency.toUpperCase());
  }
}
