import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (window.location.href.indexOf("details-page") > -1) {
      document.getElementById('navbarStep2').classList.add('active');
      document.getElementById('arrow1').classList.add('active');
    }

    if (window.location.href.indexOf("passengers-page") > -1) {
      document.getElementById('navbarStep2').classList.remove('active');
      document.getElementById('navbarStep2').classList.add('done');
      document.getElementById('navbarStep3').classList.add('active');
      document.getElementById('arrow1').classList.remove('active');
      document.getElementById('arrow1').classList.add('done');
      document.getElementById('arrow2').classList.add('active');
    }

    if (window.location.href.indexOf("seat-choice") > -1) {
      document.getElementById('navbarStep2').classList.remove('active');
      document.getElementById('navbarStep2').classList.add('done');
      document.getElementById('navbarStep3').classList.remove('active');
      document.getElementById('navbarStep3').classList.add('done');
      document.getElementById('navbarStep4').classList.add('active');
      document.getElementById('arrow1').classList.remove('active');
      document.getElementById('arrow1').classList.add('done');
      document.getElementById('arrow2').classList.remove('active');
      document.getElementById('arrow2').classList.add('done');
      document.getElementById('arrow3').classList.add('active');

    }

    if (window.location.href.indexOf("summary-page") > -1) {
      document.getElementById('navbarStep2').classList.remove('active');
      document.getElementById('navbarStep2').classList.add('done');
      document.getElementById('navbarStep3').classList.remove('active');
      document.getElementById('navbarStep3').classList.add('done');
      document.getElementById('navbarStep4').classList.remove('active');
      document.getElementById('navbarStep4').classList.add('done');
      document.getElementById('navbarStep5').classList.add('active');
      document.getElementById('arrow1').classList.remove('active');
      document.getElementById('arrow1').classList.add('done');
      document.getElementById('arrow2').classList.remove('active');
      document.getElementById('arrow2').classList.add('done');
      document.getElementById('arrow3').classList.remove('active');
      document.getElementById('arrow3').classList.add('done');
      document.getElementById('arrow4').classList.add('active');
    }

  }

}
