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

  constructor(private router: Router, private _userService: UserAuthenticationService) {}

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
    const email = this.UserCredentials.value.email
    const password = this.UserCredentials.value.secret

    this._userService.LoginUser(email, password).subscribe({
      next:(res) => {
        console.log('USERS : ',res)
        this.userData = res
        this.userData.forEach(user => {
          if(email === user.email && password === user.secret){
            this.router.navigate(['/home'])
          }
          else {
            alert('Username or password invalid')
          }
        });

        console.log("RESPONSE TO GET USERS : ", this.userData)
      },
      error:(err) => {
        console.error('Error retrieving users : ', err)
      }
    })
  }
}
