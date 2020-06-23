import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-choice',
  templateUrl: './seat-choice.component.html',
  styleUrls: ['./seat-choice.component.scss']
})
export class SeatChoiceComponent implements OnInit {
  public seatsArray;

  public adultsNumber = localStorage.getItem('adults');
  public childrenNumber = localStorage.getItem('children');
  public totalNumber = +this.adultsNumber + +this.childrenNumber;
  public seatsRemain: number = Number(this.totalNumber);
  public seatWordVariant = `miejsc${this.seatsRemain == 1 ? 'e' : (this.seatsRemain == 2 || this.seatsRemain == 3 || this.seatsRemain == 4) ? 'a' : ''}`;

  constructor() { }

  ngOnInit(): void {
    document.title = "Wybór miejsca | Bon Voyage | Zarezerwuj swój lot!"
    const seatsChosen = new Array();
    this.seatsArray = Array.from(document.querySelectorAll('.cls-1'));
    this.seatsArray.forEach(seat => {
      seat.addEventListener('click', function () {
        const clickedSeat = document.getElementById(this.id);
        this.seatsRemain;
        if (clickedSeat.classList.contains('seat-selected')) {
          clickedSeat.classList.remove('seat-selected');
          console.log(seatsChosen.indexOf(this.id.slice(1)));
          console.log(this.id.slice(1));
          seatsChosen.splice(seatsChosen.indexOf(this.id.slice(1)), 1);
          console.log(seatsChosen.join(', '));
          localStorage.setItem('seats', seatsChosen.join(', '));
          document.getElementById('seatsField').innerHTML = `${seatsChosen.join(', ')}`;
        }
        else {
          if (!(clickedSeat.classList.contains('seat-occupied'))
            && (seatsChosen.length < (+(localStorage.getItem('adults')) + +(localStorage.getItem('children'))))) {
            clickedSeat.classList.add('seat-selected');
            console.log(this.id.slice(1));
            seatsChosen.push(this.id.slice(1));
            console.log(seatsChosen);
            console.log(seatsChosen.join(', '));
            localStorage.setItem('seats', seatsChosen.join(', '))
            document.getElementById('seatsField').innerHTML = `${seatsChosen.join(', ')}`;
          } else {
            clickedSeat.classList.contains('seat-occupied') ? alert('miejsce zajęte') : alert('zbyt dużo');
          }
        }
      }
      )
    });



    // for (let i = 0; i < this.totalNumber; i++) {
    //   console.log('tak');
    //   console.log(localStorage.getItem('seats'));
    //   const passengerName = document.createElement('p');
    //   document.getElementById('passengersContainer').appendChild(passengerName);
    //   passengerName.textContent = 'Imię i nazwisko';
    //   passengerName.setAttribute('id', `pass_${i + 1}`);
    //   const seatNumber = document.createElement('span');
    //   document.getElementById(`pass_${i + 1}`).appendChild(seatNumber);
    //   seatNumber.textContent = 'Nr miejsca';
    //   seatNumber.setAttribute('id', `seat_${i + 1}`);
    //   seatNumber.setAttribute('class', 'seat-number');
    // }


  }
}