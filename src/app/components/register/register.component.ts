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
  })

  constructor(private router: Router, private userService: UserAuthenticationService) {}

  ngOnInit(): void {

  }

  saveUserDetails() {
    const full_name = this.RegisterUserForm.value.full_name
    const cod_fisc = this.RegisterUserForm.value.cod_fisc
    const phone_number = this.RegisterUserForm.value.phone_number
    const email = this.RegisterUserForm.value.email
    const secret = this.RegisterUserForm.value.secret

    this.userService.RegisterUser(full_name,cod_fisc,phone_number,email,secret).subscribe({
      next:(res) => {
        console.log(`User registered successfully : ${res}`)
      },
      error:(err) => {
        console.log(`Error registering user : ${err}`)
      }
    })
  }
}
