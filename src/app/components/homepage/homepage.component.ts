import { Component } from '@angular/core';
import { User } from '../../models/user';
import { CarRegistrationService } from '../../services/car-registration.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  car: any = []
  user: User | undefined;
  userID: string | null = null;
  isMacchinaInCarica = false
  percentualeMacchina = 0

  carModels = {
    i3 : '../../../assets/images/bwm-i3.png',
    model3 : '../../../assets/images/model-3.png'
  }
    

  constructor(
    private carService: CarRegistrationService,
  ) { 
    
   }

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.userID = localStorage.getItem('userID');
      console.log(this.userID)
      this.carService.RetrieveCar(this.userID).forEach(car => {
        this.car = JSON.stringify(car)
        console.log(this.car)
      })
    }

    this.carService.RetrieveCar(this.userID).subscribe({
      next:(res) => {
        this.car = res
        console.log("Dati macchina : ", this.car)
      },
      error:(err) => {
        console.error('Errore richiesta per avere dati della macchina : ', err)
      }
    })
  }

    /***********************
   * FUNCTION TO CHARGE CAR
   ************************/
    public caricaMacchina() {
      this.isMacchinaInCarica = !this.isMacchinaInCarica;
      const intervalId = setInterval(() => {
          this.percentualeMacchina += 5;
          if (this.percentualeMacchina >= 100) {
              this.percentualeMacchina = 100; // Ensures it does not exceed 100
              console.log(this.percentualeMacchina);
              clearInterval(intervalId); // Stop the interval
          }
      }, 1000);
  }
  
}
