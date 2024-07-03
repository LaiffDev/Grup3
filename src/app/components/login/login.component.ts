import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationService } from '../../services/user-authentication.service';
import { User } from '../../models/user';
import { CarRegistrationService } from '../../services/car-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  hide = true;

  userData : any
  carData : any
  userID: any

  constructor(private _router: Router, private _userService: UserAuthenticationService, private _carService : CarRegistrationService) {}

  ngOnInit(){
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('username')
      localStorage.removeItem('userID')
    }
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
            //console.log("Single User : ", user)

            localStorage.setItem('username', user.full_name);
            localStorage.setItem('userID',user.id)

            this.userID = localStorage.getItem('userID')

            this._carService.RetrieveCar(this.userID).subscribe({
              next:(res) => {
                this.carData = res
                //console.log("Car data : ", this.carData)

                //se l'utente non ha una macchina registrata vai sulla car-registration altrimenti vai direttamente nella home
                if(this.carData === null){
                  this._router.navigate(["car-register"]);
                }
                else{
                  alert('Login avvenuto con successo!');
                  this._router.navigate(["home"])
                }
              },
              error: (err) => {
                console.error(err)
              }
            })
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
