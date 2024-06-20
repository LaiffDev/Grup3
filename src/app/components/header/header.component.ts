import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
