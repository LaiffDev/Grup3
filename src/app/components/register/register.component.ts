import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  hide = true;

  //FORMGROUP per la registrazione dell'utente
  RegisterUserForm = new FormGroup({
    full_name : new FormControl('',[Validators.required]),
    phone_number : new FormControl('',[Validators.required]),
    cod_fisc : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    secret : new FormControl('',[Validators.required])
  });

  constructor(private router: Router, private userService: UserAuthenticationService) {}

  ngOnInit(): void {

  }
  /**************************************
   * FUNCTION TO REGISTER A USER 
   * USING THE UserAuthenticationService
   *************************************/
  saveUserDetails() {
    const { full_name, phone_number, cod_fisc, email, secret } = this.RegisterUserForm.value

    if (full_name && phone_number && cod_fisc && email && secret) {
      this.userService.RegisterUser(full_name,phone_number,cod_fisc,email,secret).subscribe({
        next : (res) => {
          console.log(res)
          alert('Registrazione avvenuto con successo')
          this.router.navigate([""])
        },
        error : (err) => {
          console.error('Errore nella registrazione : ', err)
        }
      })
    }
    else{
      alert('Impossibile registarsi. Controlla i campi!');
      // this.markFormFieldsAsInvalid();
    }
  }

  // markFormFieldsAsInvalid() {
  //   Object.keys(this.RegisterUserForm.controls).forEach(field => {
  //     const control = this.RegisterUserForm.get(field);
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //       control.markAsDirty({ onlySelf: true });
  //     }
  //   });
  // }
}
