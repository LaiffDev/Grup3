import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  username: any

  ngOninit(){
    this.username = localStorage.getItem('username')
    console.log("user_name : ", this.username)
  }

}
