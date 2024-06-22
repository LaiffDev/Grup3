import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../../services/user-authentication.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;

  userData : any

  constructor(private _router: Router, private _userService: UserAuthenticationService) {}

  ngOnInit(){
  }

  /**********************************************
   * FORM CHE PRENDE I VALORI CHE METTE L'UTENTE
   *********************************************/
  UserCredentials = new FormGroup({
    email: new FormControl('', [Validators.required]),
    secret: new FormControl('', [Validators.required]),
  });

  /**********************
   * FUNZIONE DEL LOGIN
   **********************/
  loginUser() {
    const { email, secret } = this.UserCredentials.value;
  
    if (email && secret) {
      this._userService.LoginUser(email, secret).subscribe({
        next: (res) => {
          this.userData = res;
          console.log("User Data : ", this.userData);
  
          const user = this.userData.find(user => email === user.email && secret === user.secret);
          if (user) {
            localStorage.setItem('username', user.full_name);
            localStorage.setItem('userID',user.id)
            
            this._router.navigate(['home']);
            alert('Login avvenuto con successo!');
          } else {
            alert('Credenziali non valide!');
          }
        },
        error: (err) => {
          console.error('Errore di accesso : ', err);
        }
      });
    } else {
      alert('Errore! controlla che non ci siano campi vuoti');
    }
  }
  
}
