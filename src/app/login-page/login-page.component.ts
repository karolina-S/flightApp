import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from './users';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.title = "Logowanie | Bon Voyage | Zarezerwuj swój lot!"
  }

  logIn([login, password]) {
    for (let i = 0; i < users.length; i++) {
      users[i].login == login ? (users[i].password == password ? this.router.navigate(['/passengers-page']) : alert('błędne hasło')) : null
    }

  }

}
