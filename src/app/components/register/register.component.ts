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
    // Destructure form values for better readability
    const { full_name, cod_fisc, phone_number, email, secret } = this.RegisterUserForm.value;


    this.userService.RegisterUser(full_name, cod_fisc, phone_number, email, secret).subscribe({
      next: (res) => {
        console.log(`User registered successfully: ${res}`);
        this.router.navigate(['car-register'])
      },
      error: (err) => {
        console.error(`Error registering user: ${err}`);
      }
    });
  }
  
}
