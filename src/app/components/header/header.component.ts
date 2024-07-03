import { Component, inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarRegisterComponent } from '../car-register/car-register.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);

  // openDialog() {
  //   const dialogRef = this.dialog.open(CarRegisterComponent);
 
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  constructor(private router : Router) {}

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
