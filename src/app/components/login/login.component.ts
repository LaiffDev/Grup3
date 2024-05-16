import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;

  constructor(private router: Router) {}

  /**********************************************
   * FORM CHE PRENDE I VALORI CHE METTE L'UTENTE
   *********************************************/
  UserCredentials = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  /**********************
   * FUNZIONE DEL LOGIN
   **********************/
  loginUser() {
    const email = this.UserCredentials.value.email;
    const password = this.UserCredentials.value.password;

    if (email === 'test@test.it' && password === '12345') {
      this.router.navigate(['home']);
    }
  }
}
