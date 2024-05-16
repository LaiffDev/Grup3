import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  hide = true;

  constructor(private router: Router) {}

  saveUserDetails() {
    alert('user saved. now changing to car registration');
    this.router.navigate(['car-register']);
  }
}
