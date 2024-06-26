import { Component, inject } from '@angular/core';
import { User } from '../../models/user';
import { CarRegistrationService } from '../../services/car-registration.service';
import { Car } from '../../models/car';
import { CarRegisterComponent } from '../car-register/car-register.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
 

  cars:any = []

  user: User | undefined;
  userID: string | null = null;
  isMacchinaInCarica = false
  percentualeMacchina = 0

  carModels = {
    i3 : '../../../assets/images/bwm-i3.png',
    model3 : '../../../assets/images/model-3.png'
  }


  constructor(
    private carService: CarRegistrationService,) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.userID = localStorage.getItem('userID');
      console.log(this.userID)
    }

    this.retrieveCar()

  }

    /***********************
   * FUNCTION TO CHARGE CAR
   ************************/
    public caricaMacchina() {
      this.isMacchinaInCarica = !this.isMacchinaInCarica;
      const intervalId = setInterval(() => {
          this.percentualeMacchina += 1;
          if (this.percentualeMacchina >= 100) {
              this.percentualeMacchina = 100; // Ensures it does not exceed 100
              console.log(this.percentualeMacchina);
              clearInterval(intervalId); // Stop the interval
          }
      }, 5000);
  }

    /***********************
   * FUNCTION TO GET CAR
   ************************/
  public retrieveCar(){
    this.carService.RetrieveCar(this.userID).subscribe({
      next:(res) => {
        console.log(res)
        this.cars.push(res)
        console.log("Dati macchina : ", this.cars)
      },
      error:(err) => {
        console.error('Errore richiesta per avere dati della macchina : ', err)
      }
    })
  }

}
