import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryPageComponent implements OnInit {

  public adultsNumber;
  public childrenNumber;
  public babiesNumber;
  public total;

  constructor() { }

  ngOnInit(): void {
    this.adultsNumber = localStorage.getItem('adults');
    this.childrenNumber = localStorage.getItem('children');
    this.babiesNumber = localStorage.getItem('babies');
    this.total = +this.adultsNumber + +this.childrenNumber + +this.babiesNumber;

    document.title = "Podsumowanie | Bon Voyage | Zarezerwuj swój lot!"
    for (let i = 0; i < this.total; i++) {
      const boardingPass = document.createElement('div');
      boardingPass.classList.add('boarding-pass-container')
      document.getElementById('flexContainer').appendChild(boardingPass);
      boardingPass.innerHTML = `
    <svg id="bording-pass1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 120.58 161.01" class="boarding-pass">
        <rect class="cls-1" x="0.5" y="0.5" width="119.58" height="22.46" />
        <rect class="cls-2" x="0.5" y="0.5" width="119.58" height="160.01" />
        <text class="cls-3" transform="translate(8.64 44.57)">
            POZ
        </text>
        <text class="cls-3" transform="translate(66.24 44.57)">
            WAW
        </text>
        <text class="cls-6" transform="translate(9.65 86.78)">
            25.06.2020
        </text>
        <text class="cls-12" transform="translate(9.65 114.33)">
            PASSENGER
        </text>
        <text class="cls-6" transform="translate(9.65 121.82)">
            KAROLINA STEFAŃCZYK
        </text>
        <rect class="cls-1" x="77.33" y="80.35" width="33.94" height="19.24" />
        <text class="cls-18" transform="translate(77.79 79.3)">
            SEAT NUMBER
        </text>
        <text class="cls-20" transform="translate(82.24 96.91)">
            A7
        </text>
        <text class="cls-18" transform="translate(9.86 96.91)">
            CLASS
        </text>
        <text class="cls-6" transform="translate(9.44 104.35)">
            FIRST
        </text>
        <text class="cls-24" transform="translate(9.65 61.7)">
            8:55
        </text>
        <text class="cls-24" transform="translate(98.86 61.7)">
            9:45
        </text>
        <line class="cls-27" x1="27.91" y1="59.98" x2="47.91" y2="59.98" />
        <line class="cls-27" x1="71.02" y1="59.98" x2="91.02" y2="59.98" />
        <text class="cls-18" transform="translate(9.65 79.3)">
            DATE
        </text>
        <line class="cls-28" x1="12.95" y1="132.22" x2="12.95" y2="153.09" />
        <line class="cls-28" x1="11.05" y1="132.22" x2="11.05" y2="153.09" />
        <line class="cls-29" x1="15.19" y1="132.22" x2="15.19" y2="153.09" />
        <line class="cls-28" x1="18.08" y1="132.21" x2="18.08" y2="153.08" />
        <line class="cls-30" x1="20.67" y1="132.21" x2="20.67" y2="153.08" />
        <line class="cls-28" x1="25.15" y1="132.18" x2="25.15" y2="153.05" />
        <line class="cls-28" x1="23.25" y1="132.18" x2="23.25" y2="153.05" />
        <line class="cls-29" x1="27.4" y1="132.18" x2="27.4" y2="153.05" />
        <line class="cls-28" x1="30.29" y1="132.17" x2="30.29" y2="153.04" />
        <line class="cls-28" x1="32.19" y1="132.25" x2="32.19" y2="153.12" />
        <line class="cls-29" x1="34.43" y1="132.25" x2="34.43" y2="153.12" />
        <line class="cls-28" x1="37.32" y1="132.24" x2="37.32" y2="153.11" />
        <line class="cls-30" x1="39.91" y1="132.24" x2="39.91" y2="153.11" />
        <line class="cls-28" x1="44.39" y1="132.21" x2="44.39" y2="153.07" />
        <line class="cls-28" x1="42.49" y1="132.21" x2="42.49" y2="153.07" />
        <line class="cls-29" x1="46.64" y1="132.21" x2="46.64" y2="153.07" />
        <line class="cls-28" x1="49.53" y1="132.19" x2="49.53" y2="153.06" />
        <line class="cls-30" x1="52.11" y1="132.19" x2="52.11" y2="153.06" />
        <line class="cls-28" x1="55.84" y1="132.15" x2="55.84" y2="153.01" />
        <line class="cls-28" x1="53.94" y1="132.15" x2="53.94" y2="153.01" />
        <line class="cls-29" x1="58.08" y1="132.15" x2="58.08" y2="153.01" />
        <line class="cls-28" x1="60.97" y1="132.13" x2="60.97" y2="153" />
        <line class="cls-30" x1="63.56" y1="132.13" x2="63.56" y2="153" />
        <line class="cls-28" x1="68.04" y1="132.1" x2="68.04" y2="152.97" />
        <line class="cls-28" x1="66.14" y1="132.1" x2="66.14" y2="152.97" />
        <line class="cls-29" x1="70.29" y1="132.1" x2="70.29" y2="152.97" />
        <line class="cls-28" x1="73.18" y1="132.09" x2="73.18" y2="152.96" />
        <line class="cls-28" x1="75.08" y1="132.17" x2="75.08" y2="153.04" />
        <line class="cls-29" x1="77.33" y1="132.17" x2="77.33" y2="153.04" />
        <line class="cls-28" x1="80.21" y1="132.16" x2="80.21" y2="153.03" />
        <line class="cls-30" x1="82.8" y1="132.16" x2="82.8" y2="153.03" />
        <line class="cls-28" x1="87.29" y1="132.13" x2="87.29" y2="153" />
        <line class="cls-28" x1="85.38" y1="132.13" x2="85.38" y2="153" />
        <line class="cls-29" x1="89.53" y1="132.13" x2="89.53" y2="153" />
        <line class="cls-28" x1="92.42" y1="132.12" x2="92.42" y2="152.99" />
        <line class="cls-28" x1="95.71" y1="132.14" x2="95.71" y2="153" />
        <line class="cls-28" x1="93.81" y1="132.14" x2="93.81" y2="153" />
        <line class="cls-29" x1="97.96" y1="132.14" x2="97.96" y2="153" />
        <line class="cls-28" x1="100.85" y1="132.13" x2="100.85" y2="152.99" />
        <line class="cls-30" x1="103.43" y1="132.13" x2="103.43" y2="152.99" />
        <line class="cls-28" x1="107.29" y1="132.17" x2="107.29" y2="153.04" />
        <line class="cls-28" x1="105.39" y1="132.17" x2="105.39" y2="153.04" />
        <line class="cls-31" x1="109.54" y1="132.17" x2="109.54" y2="153.04" />
        <rect x="54.9" y="59.35" width="8.61" height="1.26" />
        <path d='M214.51,138.89h-2.15l-1.17-3.27,1.09,0Z' transform="translate(-153.65 -79.54)" />
        <path d='M214.51,140.15h-2.15l-1.17,3.26,1.09,0Z' transform="translate(-153.65 -79.54)" />
        <ellipse cx="63.54" cy="59.98" rx="0.55" ry="0.63" />
        <path d='M209.5,138.89h-.95l-.41-1.15h.64Z' transform="translate(-153.65 -79.54)" />
        <path d='M209.5,140.15h-.95l-.41,1.15h.64Z' transform="translate(-153.65 -79.54)" />
        <text class="cls-32" transform="translate(18.07 21.44)">
            BOARDING PASS
        </text>
        <image width="40" height="39" transform="translate(51.11 2.68) scale(0.22)"
            xlink:href="data:image/png;base64,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" />
        <text class="cls-35" transform="translate(35.58 9.71)">
            Bon
        </text>
        <text class="cls-35" transform="translate(60.71 9.8)">
            Voyage
        </text>
        <circle class="cls-39" cx="55.62" cy="7.04" r="3.85" />
    </svg>`
    }
  }
}
