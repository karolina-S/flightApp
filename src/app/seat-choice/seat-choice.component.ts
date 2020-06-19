import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-choice',
  templateUrl: './seat-choice.component.html',
  styleUrls: ['./seat-choice.component.scss']
})
export class SeatChoiceComponent implements OnInit {

  public seatsArray = ["_1a-2", "_1b-2", "_1c-2", "_1d-2", "_2a-2", "_2b-2", "_2c-2", "_2d-2", "_3a-2", "_3b-2", "_3c-2", "_3d-2", "_4a-2", "_4b-2", "_4c-2", "_4d-2", "_5a-2", "_5b-2", "_5c-2", "_5d-2", "_6a-2", "_6b-2", "_6c-2", "_6d-2", "_7a-2", "_7b-2", "_7c-2", "_7d-2", "_8a-2", "_8b-2", "_8c-2", "_8d-2", "_9a-2", "_9b-2", "_9c-2", "_9d-2", "_10a-2", "_10b-2", "_10c-2", "_10d-2", "_11a-2", "_11b-2", "_11c-2", "_11d-2", "_12a-2", "_12b-2", "_12c-2", "_12d-2", "_13a-2", "_13b-2", "_13c-2", "_13d-2", "_14a-2", "_14b-2", "_14c-2", "_14d-2", "_15a-2", "_15b-2", "_15c-2", "_15d-2", "_16a-2", "_16b-2", "_16c-2", "_16d-2", "_17a-2", "_17b-2", "_17c-2", "_17d-2", "_18a-2", "_18b-2", "_18c-2", "_18d-2",];
  public chosenSeats = [];
  public countSeats: number = 1;
  public total;

  constructor() { }

  ngOnInit(): void {
    const seatsChosen = new Array();
    for (let i = 0; i < this.seatsArray.length; i++) {
      document.getElementById(this.seatsArray[i]).addEventListener("click", function () {
        if (document.getElementById(this.id).classList.contains('seat-selected')) {
          document.getElementById(this.id).classList.remove('seat-selected');
          seatsChosen.splice(seatsChosen.indexOf(this.id), 1);
          console.log(seatsChosen);
          console.log(seatsChosen.join(', '));
          localStorage.setItem('seats', seatsChosen.join(', '))
        }
        else {

          if (document.getElementById(this.id).classList.contains('seat-occupied')) {
            alert("miejsce zajęte!");
          }
          else {
            document.getElementById(this.id).classList.add('seat-selected');
            seatsChosen.push(this.id);
            console.log(seatsChosen);
            console.log(seatsChosen.join(', '));
            localStorage.setItem('seats', seatsChosen.join(', '))
          }
        }
      })
    }

  }


}