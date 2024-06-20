import { Component } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { CarRegistrationService } from '../../services/car-registration.service';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {


  cars: any
  user: User | undefined;
  userID: string | null = null;

  constructor(
    private carService: CarRegistrationService,
    private userService: UserAuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.carService.RetrieveCar()
  }
}
