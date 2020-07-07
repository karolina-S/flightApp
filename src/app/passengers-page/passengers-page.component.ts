import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passengers-page',
  templateUrl: './passengers-page.component.html',
  styleUrls: ['./passengers-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PassengersPageComponent implements OnInit {

  public adultsNumber;
  public childrenNumber;
  public babiesNumber;
  public total;

  // public timeout;


  constructor(private router: Router) { }

  ngOnInit(): void {
    document.title = "Dane pasażerów | Bon Voyage | Zarezerwuj swój lot!"

// document.addEventListener("mousemove", () => {
//       clearInterval(this.timeout);
//       this.timeout = setInterval(function () {
//         alert("10sekund")
//       }, 80000)
//     });

//     document.addEventListener("keyup", () => {
//       clearInterval(this.timeout);
//       this.timeout = setInterval(function () {
//         alert("10sekund")
//       }, 80000)
//     })

    this.adultsNumber = localStorage.getItem('adults');
    this.childrenNumber = localStorage.getItem('children');
    this.babiesNumber = localStorage.getItem('babies');
    this.total = +this.adultsNumber + +this.childrenNumber + +this.babiesNumber;

    for (let i = 0; i < this.adultsNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      p.classList.add('passengers__subtitle');
      document.getElementById('adultPassengersContainer').appendChild(p);
      p.textContent = `Pasażer nr ${i + 1} - dorosły`
      // Tytuł (płeć)
      const nameField = document.createElement('div');
      nameField.classList.add('passengers__item-div')
      document.getElementById('adultPassengersContainer').appendChild(nameField);
      const genderInputMale = document.createElement('input');
      nameField.setAttribute('id', `nameField${i + 1}`)
      nameField.classList.add('passengers__item-div')
      nameField.appendChild(genderInputMale);
      genderInputMale.setAttribute('type', 'radio');
      genderInputMale.setAttribute('id', `male${i + 1}`);
      genderInputMale.setAttribute('name', 'gender');
      genderInputMale.setAttribute('value', 'male');
      genderInputMale.classList.add('gender-radio')
      const genderLabelMale = document.createElement("label");
      nameField.appendChild(genderLabelMale);
      genderLabelMale.setAttribute('for', `male${i + 1}`);
      genderLabelMale.textContent = "Pan";
      genderLabelMale.classList.add('passengers__gender')
      genderLabelMale.addEventListener('click', function () {
        localStorage.setItem(`gender_user${i + 1}`, this.getAttribute('for'));
        genderLabelMale.style.backgroundColor = "#2286a9";
        genderLabelMale.style.color = "white";
        genderLabelFemale.style.backgroundColor = "#e2e1e6";
        genderLabelFemale.style.color = "black";
      })
      const genderInputFemale = document.createElement('input');
      nameField.appendChild(genderInputFemale);
      genderInputFemale.setAttribute('type', 'radio');
      genderInputFemale.setAttribute('id', `female${i + 1}`);
      genderInputFemale.setAttribute('name', 'gender');
      genderInputFemale.setAttribute('value', 'female');
      genderInputFemale.classList.add('gender-radio')
      const genderLabelFemale = document.createElement("label");
      nameField.appendChild(genderLabelFemale);
      genderLabelFemale.setAttribute('for', `female${i + 1}`);
      genderLabelFemale.textContent = "Pani";
      genderLabelFemale.classList.add('passengers__gender');
      genderLabelFemale.addEventListener('click', function () {
        localStorage.setItem(`gender_user${i + 1}`, this.getAttribute('for'));
        genderLabelMale.style.backgroundColor = "#e2e1e6";
        genderLabelMale.style.color = "black";
        genderLabelFemale.style.backgroundColor = "#2286a9";
        genderLabelFemale.style.color = "white";
      })


      // Imię i nazwisko
      const firstNameLabel = document.createElement("label");
      nameField.appendChild(firstNameLabel);
      firstNameLabel.setAttribute('for', 'firstName');
      firstNameLabel.textContent = "Imię*:";
      firstNameLabel.classList.add('passengers__label');
      const firstNameInput = document.createElement('input');
      firstNameInput.setAttribute('id', `firstName_user${i + 1}`);
      firstNameInput.classList.add('passengers__input');
      firstNameInput.addEventListener('input', function () {
        localStorage.setItem(`firstName_user${i + 1}`, this.value);
      })
      nameField.appendChild(firstNameInput);
      const familyNameLabel = document.createElement("label");
      nameField.appendChild(familyNameLabel);
      familyNameLabel.setAttribute('for', 'familyName');
      familyNameLabel.textContent = "Nazwisko*:";
      familyNameLabel.classList.add('passengers__label');
      const familyNameInput = document.createElement('input');
      familyNameInput.classList.add('passengers__input');
      familyNameInput.setAttribute('id', `familyName_user${i + 1}`);
      familyNameInput.addEventListener('input', function () {
        localStorage.setItem(`familyName_user${i + 1}`, this.value);
      })
      nameField.appendChild(familyNameInput);
    }

    for (let i = 0; i < this.childrenNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      document.getElementById('childrenPassengersContainer').appendChild(p);
      p.classList.add('passengers__subtitle');
      p.textContent = `Pasażer nr ${+this.adultsNumber + i + 1} - dziecko`;
      const childUserNumber = +this.adultsNumber + i + 1;
      // Imię i nazwisko
      const nameField = document.createElement('div');
      nameField.classList.add('passengers__item-div');
      const firstNameLabel = document.createElement("label");
      document.getElementById('childrenPassengersContainer').appendChild(nameField);
      nameField.appendChild(firstNameLabel);
      firstNameLabel.setAttribute('for', 'firstName');
      firstNameLabel.textContent = "Imię*:";
      firstNameLabel.classList.add('passengers__label');
      const firstNameInput = document.createElement('input');
      firstNameInput.setAttribute('id', `firstName_user${+this.adultsNumber + i + 1}`);
      firstNameInput.classList.add('passengers__input');
      firstNameInput.addEventListener('input', function () {
        localStorage.setItem(`firstName_user${childUserNumber}`, this.value);
      })
      nameField.appendChild(firstNameInput);
      const familyNameLabel = document.createElement("label");
      nameField.appendChild(familyNameLabel);
      firstNameLabel.setAttribute('for', 'familyName');
      familyNameLabel.textContent = "Nazwisko*:";
      familyNameLabel.classList.add('passengers__label');
      const familyNameInput = document.createElement('input');
      familyNameInput.setAttribute('id', `familyName_user${+this.adultsNumber + i + 1}`);
      familyNameInput.classList.add('passengers__input');
      familyNameInput.addEventListener('input', function () {
        localStorage.setItem(`familyName_user${childUserNumber}`, this.value);
      })
      nameField.appendChild(familyNameInput);
      // Data urodzenia
      const childBirthDateLabel = document.createElement("label");
      nameField.appendChild(childBirthDateLabel);
      childBirthDateLabel.setAttribute('for', 'childBirthDate');
      childBirthDateLabel.textContent = "Data urodzenia*:";
      childBirthDateLabel.classList.add('passengers__label');
      const childBirthDateInput = document.createElement('input');
      nameField.appendChild(childBirthDateInput);
      childBirthDateInput.setAttribute('id', `birthDay_user${+this.adultsNumber + i + 1}`)
      childBirthDateInput.setAttribute('type', 'date');
      childBirthDateInput.classList.add('passengers__input')
      childBirthDateInput.addEventListener('input', function () {
        localStorage.setItem(`birthDay_user${childUserNumber}`, this.value);
      })
    }
    for (let i = 0; i < this.babiesNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      p.classList.add('passengers__subtitle');
      document.getElementById('babiesPassengersContainer').appendChild(p);
      p.textContent = `Pasażer nr ${+this.adultsNumber + +this.childrenNumber + i + 1} - niemowlę`;
      const babyUserNumber = +this.adultsNumber + +this.childrenNumber + i + 1;
      // Data urodzenia
      const dateField = document.createElement('div');
      const babyBirthDateLabel = document.createElement("label");
      document.getElementById('babiesPassengersContainer').appendChild(dateField);
      dateField.appendChild(babyBirthDateLabel);
      dateField.classList.add('passengers__item-div');
      babyBirthDateLabel.setAttribute('for', 'babyBirthDate');
      babyBirthDateLabel.textContent = "Data urodzenia*:";
      babyBirthDateLabel.classList.add('passengers__label');
      const babyBirthDateInput = document.createElement('input');
      dateField.appendChild(babyBirthDateInput);
      babyBirthDateInput.setAttribute('id', `birthDay_user${+this.adultsNumber + +this.childrenNumber + i + 1}`)
      babyBirthDateInput.setAttribute('type', 'date');
      babyBirthDateInput.classList.add('passengers__input')
      babyBirthDateInput.addEventListener('input', function () {
        localStorage.setItem(`birthDay_user${babyUserNumber}`, this.value);
      })
    }
  }

  // savePersonalData(emailAddress, phoneNumber, rulesAgreement) {
  //   for (let i = 0; i < this.adultsNumber; i++) {
  //     if ((localStorage.getItem(`gender_user${i + 1}`) !== null) && (localStorage.getItem(`firstName_user${i + 1}`) !== null) && (localStorage.getItem(`familyName_user${i + 1}`) !== null)) {
  //       for (let j = 0; j < this.childrenNumber; j++) {
  //         if ((localStorage.getItem(`firstName_user${this.adultsNumber + j + 1}`) !== null) && (localStorage.getItem(`familyName_user${this.adultsNumber + j + 1}`) !== null) && (localStorage.getItem(`birthDay_user${this.adultsNumber + j + 1}`) !== null)) {
  //           if (emailAddress != '' && phoneNumber != '') {
  //             if (rulesAgreement === true) {
  //               localStorage.setItem('emailAddress', emailAddress);
  //               localStorage.setItem('phoneNumber', phoneNumber);
  //               localStorage.setItem('rulesAgreement', rulesAgreement);
  //               this.router.navigate(['/seat-choice']);
  //             } else {
  //               alert('Proszę zaakceptować regulamin!');
  //             }
  //           } else {
  //             alert('Proszę wypełnić wszystkie pola!')
  //           }
  //         } else {
  //           alert('Proszę wypełnić wszystkie pola dziecka!')
  //         }
  //       }
  //     } else {
  //       alert('Proszę wypełnić wszystkie pola dorosłego!');
  //     }
  //   }
  // }
}