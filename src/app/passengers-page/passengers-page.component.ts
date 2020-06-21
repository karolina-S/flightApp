import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers-page',
  templateUrl: './passengers-page.component.html',
  styleUrls: ['./passengers-page.component.scss']
})
export class PassengersPageComponent implements OnInit {

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

    for (let i = 0; i < this.adultsNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      document.getElementById('adultPassengersContainer').appendChild(p);
      p.textContent = `Pasażer nr ${i + 1}`
      // Tytuł (płeć)
      const genderInputMale = document.createElement('input');
      document.getElementById('adultPassengersContainer').appendChild(genderInputMale);
      genderInputMale.setAttribute('type', 'radio');
      genderInputMale.setAttribute('id', 'male');
      genderInputMale.setAttribute('name', 'gender');
      genderInputMale.setAttribute('value', 'male');
      const genderLabelMale = document.createElement("label");
      document.getElementById('adultPassengersContainer').appendChild(genderLabelMale);
      genderLabelMale.setAttribute('for', 'male');
      genderLabelMale.textContent = "Pan";
      const genderInputFemale = document.createElement('input');
      document.getElementById('adultPassengersContainer').appendChild(genderInputFemale);
      genderInputFemale.setAttribute('type', 'radio');
      genderInputFemale.setAttribute('id', 'female');
      genderInputFemale.setAttribute('name', 'gender');
      genderInputFemale.setAttribute('value', 'female');
      const genderLabelFemale = document.createElement("label");
      document.getElementById('adultPassengersContainer').appendChild(genderLabelFemale);
      genderLabelFemale.setAttribute('for', 'female');
      genderLabelFemale.textContent = "Pani";
      // Imię i nazwisko
      const firstNameLabel = document.createElement("label");
      document.getElementById('adultPassengersContainer').appendChild(firstNameLabel);
      firstNameLabel.setAttribute('for', 'firstName');
      firstNameLabel.textContent = "Imię*:";
      const firstNameInput = document.createElement('input');
      document.getElementById('adultPassengersContainer').appendChild(firstNameInput);
      const familyNameLabel = document.createElement("label");
      document.getElementById('adultPassengersContainer').appendChild(familyNameLabel);
      firstNameLabel.setAttribute('for', 'familyName');
      familyNameLabel.textContent = "Nazwisko*:";
      const familyNameInput = document.createElement('input');
      document.getElementById('adultPassengersContainer').appendChild(familyNameInput);
    }

    for (let i = 0; i < this.childrenNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      document.getElementById('childrenPassengersContainer').appendChild(p);
      p.textContent = `Pasażer nr ${+this.adultsNumber + i + 1}`;
      // Imię i nazwisko
      const firstNameLabel = document.createElement("label");
      document.getElementById('childrenPassengersContainer').appendChild(firstNameLabel);
      firstNameLabel.setAttribute('for', 'firstName');
      firstNameLabel.textContent = "Imię*:";
      const firstNameInput = document.createElement('input');
      document.getElementById('childrenPassengersContainer').appendChild(firstNameInput);
      const familyNameLabel = document.createElement("label");
      document.getElementById('childrenPassengersContainer').appendChild(familyNameLabel);
      firstNameLabel.setAttribute('for', 'familyName');
      familyNameLabel.textContent = "Nazwisko*:";
      const familyNameInput = document.createElement('input');
      document.getElementById('childrenPassengersContainer').appendChild(familyNameInput);
      const childBirthDateLabel = document.createElement("label");
      document.getElementById('childrenPassengersContainer').appendChild(childBirthDateLabel);
      childBirthDateLabel.setAttribute('for', 'childBirthDate');
      childBirthDateLabel.textContent = "Data urodzenia*:";
      const childBirthDateInput = document.createElement('input');
      document.getElementById('childrenPassengersContainer').appendChild(childBirthDateInput);
      childBirthDateInput.setAttribute('type', 'date');
    }
    for (let i = 0; i < this.babiesNumber; i++) {
      //  Pasażer + nr
      const p = document.createElement("p");
      document.getElementById('babiesPassengersContainer').appendChild(p);
      p.textContent = `Pasażer nr ${+this.adultsNumber + +this.childrenNumber + i + 1}`;
      const babyBirthDateLabel = document.createElement("label");
      document.getElementById('babiesPassengersContainer').appendChild(babyBirthDateLabel);
      babyBirthDateLabel.setAttribute('for', 'babyBirthDate');
      babyBirthDateLabel.textContent = "Data urodzenia*:";
      const babyBirthDateInput = document.createElement('input');
      document.getElementById('babiesPassengersContainer').appendChild(babyBirthDateInput);
      babyBirthDateInput.setAttribute('type', 'date');


      // savePersonalData(gender, firstName, familyName, emailAddress, phoneNumber) {
      //   console.log(gender, firstName, familyName, emailAddress, phoneNumber);
      //   localStorage.setItem('gender', gender);
      //   localStorage.setItem('firstName', firstName);
      //   localStorage.setItem('familyName', familyName);
      //   localStorage.setItem('emailAddress', emailAddress);
      //   localStorage.setItem('phoneNumber', phoneNumber);
      // }

    }
  }
}