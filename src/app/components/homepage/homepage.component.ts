import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(
    private router : Router
  ){}

  username: string;

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('username');
    }
  }


  logoutUser(){
      localStorage.removeItem('username');
      this.router.navigate(['']);
  }
}


