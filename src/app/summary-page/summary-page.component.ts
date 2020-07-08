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

    public seats = localStorage.getItem('seats');
    public price: number = Number(localStorage.getItem('price'));
    public totalPrice: number;
    public currency = localStorage.getItem('currency') || 'PLN';
    public luggage10 = +(localStorage.getItem('luggage10')) * 87;
    public luggage20 = +(localStorage.getItem('luggage20')) * 87;
    public luggage32 = +(localStorage.getItem('luggage32')) * 87;
    public luggagePrice = this.luggage10 + this.luggage20 + this.luggage32;

    constructor() { }

    ngOnInit(): void {
        this.adultsNumber = localStorage.getItem('adults');
        this.childrenNumber = localStorage.getItem('children');
        this.babiesNumber = localStorage.getItem('babies');
        this.total = +this.adultsNumber + +this.childrenNumber + +this.babiesNumber;


        document.title = "Podsumowanie | Bon Voyage | Zarezerwuj swój lot!"
        this.totalPrice = Math.round((this.adultsNumber * this.price) + (this.childrenNumber * this.price * 0.67) + (this.babiesNumber * this.price * 0.1) + this.luggagePrice);

        for (let i = 0; i < this.total; i++) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('summary__wrapper');
            document.getElementById('passengersDeatils').appendChild(wrapper);
            const passNumber = document.createElement('p');
            passNumber.textContent = `Pasażer nr ${i + 1}`
            passNumber.classList.add('summary__subtitle')
            wrapper.appendChild(passNumber);
            const name = document.createElement('p');
            name.textContent = `Imię i nazwisko: ${localStorage.getItem(`firstName_user${i + 1}`)} ${localStorage.getItem(`familyName_user${i + 1}`)}`;
            const seat = document.createElement('p');
            seat.textContent = `Miejsce: ${localStorage.getItem('seats').split(', ')[i]}`;
            wrapper.appendChild(seat);
            wrapper.appendChild(name);
            if (localStorage.getItem(`firstName_user${i + 1}`) === null) {
                name.textContent = 'Imię i nazwisko: nd (niemowlę)';
                seat.textContent = 'Miejsce: nd (niemowlę)'
            };
            const date = document.createElement('p');
            date.textContent = `Data urodzenia: ${localStorage.getItem(`birthDay_user${i + 1}`)}`
            localStorage.getItem(`birthDay_user${i + 1}`) === null ? null : wrapper.appendChild(date);
        }
    }
}