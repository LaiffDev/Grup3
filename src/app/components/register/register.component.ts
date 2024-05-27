import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  hide = true;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.saveUserDetails()
  }

  saveUserDetails() {
    this.http.get<any[]>('http://localhost:3000/api/users').subscribe((response) => {
      console.log(response)
    })



    //alert('user saved. now changing to car registration');
    //this.router.navigate(['car-register']);
  }
}
