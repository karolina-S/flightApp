import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-choice-international',
  templateUrl: './seat-choice-international.component.html',
  styleUrls: ['./seat-choice-international.component.scss']
})
export class SeatChoiceInternationalComponent implements OnInit {

  public seatsArray;

  public adultsNumber: number = Number(localStorage.getItem('adults'));
  public childrenNumber: number = Number(localStorage.getItem('children'));
  public totalNumber: number = +this.adultsNumber + +this.childrenNumber;
  public plane;

  constructor() { }

  ngOnInit(): void {
    document.title = "Wybór miejsca | Bon Voyage | Zarezerwuj swój lot!"

    const seatsChosen = new Array();
    this.seatsArray = Array.from(document.querySelectorAll('.cls-1'));
    this.seatsArray.forEach(seat => {
      seat.addEventListener('click', function () {
        const clickedSeat = document.getElementById(this.id);
        if (clickedSeat.classList.contains('seat-selected')) {
          console.log('tak')
          clickedSeat.classList.add('cls-1');
          clickedSeat.classList.remove('seat-selected');
          seatsChosen.splice(seatsChosen.indexOf(this.id.slice(1)), 1);
          localStorage.setItem('seats', seatsChosen.join(', '));
          document.getElementById('seatsField').innerHTML = `${seatsChosen.join(', ')}`;
        }
        else {
          if (!(clickedSeat.classList.contains('seat-occupied')) && (seatsChosen.length < (+(localStorage.getItem('adults')) + +(localStorage.getItem('children'))))) {
            clickedSeat.classList.add('seat-selected');
            // clickedSeat.classList.remove('cls-1');
            seatsChosen.push(this.id.slice(1));
            localStorage.setItem('seats', seatsChosen.join(', '))
            document.getElementById('seatsField').innerHTML = `${seatsChosen.join(', ')}`;
            console.log(this.id)
            console.log('nie')

          } else {
            clickedSeat.classList.contains('seat-occupied') ? alert('miejsce zajęte') : alert('zbyt dużo');
          }
        }
      }
      )
    });

    this.plane = localStorage.getItem('plane');
    if (this.plane === 'country') {
      document.getElementById('europePlane').style.display = 'none';
      document.getElementById('worldPlane').style.display = 'none';
    } else if (this.plane === 'international') {
      document.getElementById('countryPlane').style.display = 'none';
      document.getElementById('worldPlane').style.display = 'none';
    } else if (this.plane === 'world') {
      document.getElementById('countryPlane').style.display = 'none';
      document.getElementById('europePlane').style.display = 'none';
    }
  }
}
