import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {

  }

  saveUserDetails() {
    const full_name = this.RegisterUserForm.get('full_name').value
    const phone_number = this.RegisterUserForm.get('phone_number').value
    const cod_fisc = this.RegisterUserForm.get('cod_fisc').value
    const email = this.RegisterUserForm.get('email').value
    const secret = this.RegisterUserForm.get('secret').value

    console.log(`Username : ${full_name} | Phone Number : ${phone_number} |Codice Fiscale : ${cod_fisc} |Email : ${email} |Password : ${secret}`)
  }
}
