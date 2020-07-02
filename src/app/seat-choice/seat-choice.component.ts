import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-seat-choice',
  templateUrl: './seat-choice.component.html',
  styleUrls: ['./seat-choice.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeatChoiceComponent implements OnInit {
  public seatsArray;

  public adultsNumber: number = Number(localStorage.getItem('adults'));
  public childrenNumber: number = Number(localStorage.getItem('children'));
  public totalNumber: number = +this.adultsNumber + +this.childrenNumber;

  constructor() { }

  ngOnInit(): void {
    document.title = "Wybór miejsca | Bon Voyage | Zarezerwuj swój lot!"
    const seatsChosen = new Array();
    this.seatsArray = Array.from(document.querySelectorAll('.cls-1'));
    this.seatsArray.forEach(seat => {
      seat.addEventListener('click', function () {
        const clickedSeat = document.getElementById(this.id);
        if (clickedSeat.classList.contains('seat-selected')) {
          clickedSeat.classList.add('cls-1');
          clickedSeat.classList.remove('seat-selected');
          seatsChosen.splice(seatsChosen.indexOf(this.id.slice(1)), 1);
          localStorage.setItem('seats', seatsChosen.join(', '));
          document.getElementById('seatsField').innerHTML = `${seatsChosen.join(', ')}`;
        }
        else {
          if (!(clickedSeat.classList.contains('seat-occupied')) && (seatsChosen.length < (+(localStorage.getItem('adults')) + +(localStorage.getItem('children'))))) {
            clickedSeat.classList.add('seat-selected');
            clickedSeat.classList.remove('cls-1');
            seatsChosen.push(this.id.slice(1));
            localStorage.setItem('seats', seatsChosen.join(', '))
            document.getElementById('seatsField').innerHTML = `${seatsChosen.join(', ')}`;
            console.log(this.id)

          } else {
            clickedSeat.classList.contains('seat-occupied') ? alert('miejsce zajęte') : alert('zbyt dużo');
          }
        }
      }
      )
    });
  }
}