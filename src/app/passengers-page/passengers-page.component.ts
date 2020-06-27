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


  constructor(private router: Router) { }

  ngOnInit(): void {
    document.title = "Dane pasażerów | Bon Voyage | Zarezerwuj swój lot!"
    this.adultsNumber = localStorage.getItem('adults');
    this.childrenNumber = localStorage.getItem('children');
    this.babiesNumber = localStorage.getItem('babies');
    this.total = +this.adultsNumber + +this.childrenNumber + +this.babiesNumber;

    for (let i = 0; i < this.adultsNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      document.getElementById('adultPassengersContainer').appendChild(p);
      p.textContent = `Pasażer nr ${i + 1}`
      // Tytuł (płeć)
      const genderField = document.createElement('div');
      const genderInputMale = document.createElement('input');
      document.getElementById('adultPassengersContainer').appendChild(genderField);
      genderField.setAttribute('id', `genderField${i + 1}`)
      genderField.appendChild(genderInputMale);
      genderInputMale.setAttribute('type', 'radio');
      genderInputMale.setAttribute('id', `male${i + 1}`);
      genderInputMale.setAttribute('name', 'gender');
      genderInputMale.setAttribute('value', 'male');
      genderInputMale.classList.add('gender-radio')
      const genderLabelMale = document.createElement("label");
      genderField.appendChild(genderLabelMale);
      genderLabelMale.setAttribute('for', `male${i + 1}`);
      genderLabelMale.textContent = "Pan";
      genderLabelMale.classList.add('passengers__gender')
      genderLabelMale.addEventListener('click', function () {
        localStorage.setItem(`gender_user${i + 1}`, this.getAttribute('for'));
      })
      const genderInputFemale = document.createElement('input');
      genderField.appendChild(genderInputFemale);
      genderInputFemale.setAttribute('type', 'radio');
      genderInputFemale.setAttribute('id', `female${i + 1}`);
      genderInputFemale.setAttribute('name', 'gender');
      genderInputFemale.setAttribute('value', 'female');
      genderInputFemale.classList.add('gender-radio')
      const genderLabelFemale = document.createElement("label");
      genderField.appendChild(genderLabelFemale);
      genderLabelFemale.setAttribute('for', `female${i + 1}`);
      genderLabelFemale.textContent = "Pani";
      genderLabelFemale.classList.add('passengers__gender');
      genderLabelFemale.addEventListener('click', function () {
        localStorage.setItem(`gender_user${i + 1}`, this.getAttribute('for'));
      })


      // Imię i nazwisko
      const nameField = document.createElement('div');
      const firstNameLabel = document.createElement("label");
      document.getElementById('adultPassengersContainer').appendChild(nameField);
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
      p.textContent = `Pasażer nr ${+this.adultsNumber + i + 1}`;
      const childUserNumber = +this.adultsNumber + i + 1;
      // Imię i nazwisko
      const nameField = document.createElement('div');
      const firstNameLabel = document.createElement("label");
      document.getElementById('childrenPassengersContainer').appendChild(nameField);
      nameField.appendChild(firstNameLabel);
      firstNameLabel.setAttribute('for', 'firstName');
      firstNameLabel.textContent = "Imię*:";
      const firstNameInput = document.createElement('input');
      firstNameInput.setAttribute('id', `firstName_user${+this.adultsNumber + i + 1}`);
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
      const dateField = document.createElement('div');
      const childBirthDateLabel = document.createElement("label");
      document.getElementById('childrenPassengersContainer').appendChild(dateField);
      dateField.appendChild(childBirthDateLabel);
      childBirthDateLabel.setAttribute('for', 'childBirthDate');
      childBirthDateLabel.textContent = "Data urodzenia*:";
      const childBirthDateInput = document.createElement('input');
      dateField.appendChild(childBirthDateInput);
      childBirthDateInput.setAttribute('id', `birthDay_user${+this.adultsNumber + i + 1}`)
      childBirthDateInput.setAttribute('type', 'date');
      childBirthDateInput.addEventListener('input', function () {
        localStorage.setItem(`birthDay_user${childUserNumber}`, this.value);
      })
    }
    for (let i = 0; i < this.babiesNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      document.getElementById('babiesPassengersContainer').appendChild(p);
      p.textContent = `Pasażer nr ${+this.adultsNumber + +this.childrenNumber + i + 1}`;
      const babyUserNumber = +this.adultsNumber + +this.childrenNumber + i + 1;
      // Data urodzenia
      const dateField = document.createElement('div');
      const babyBirthDateLabel = document.createElement("label");
      document.getElementById('babiesPassengersContainer').appendChild(dateField);
      dateField.appendChild(babyBirthDateLabel);
      babyBirthDateLabel.setAttribute('for', 'babyBirthDate');
      babyBirthDateLabel.textContent = "Data urodzenia*:";
      const babyBirthDateInput = document.createElement('input');
      dateField.appendChild(babyBirthDateInput);
      babyBirthDateInput.setAttribute('id', `birthDay_user${+this.adultsNumber + +this.childrenNumber + i + 1}`)
      babyBirthDateInput.setAttribute('type', 'date');
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