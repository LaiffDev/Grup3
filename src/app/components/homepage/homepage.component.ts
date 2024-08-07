import { Component} from '@angular/core';
import { User } from '../../models/user';
import { CarRegistrationService } from '../../services/car-registration.service';
import { RechargeService } from '../../services/recharge.service';
import { Car } from '../../models/car';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
 

  cars: Car[] = []

  user: User | undefined;
  userID: string | null = null;
  isMacchinaInCarica: boolean = false
  percentualeMacchina: number = 0
  intervalId: any
  location: any

  carModels = {
    i3 : '../../../assets/images/bwm-i3.png',
    model3 : '../../../assets/images/model-3.png'
  }


  constructor(
    private carService: CarRegistrationService,
    private rechargeService : RechargeService) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.userID = localStorage.getItem('userID');
    }

    this.retrieveCar()
    this.getRechargeStation()

  }

    /***********************
   * FUNCTION TO CHARGE CAR
   ************************/
    public caricaMacchina() {
      this.isMacchinaInCarica = !this.isMacchinaInCarica;

    if (this.isMacchinaInCarica) {
      this.intervalId = setInterval(() => {
        this.percentualeMacchina += 1;
        if (this.percentualeMacchina >= 100) {
          this.percentualeMacchina = 100; // Ensures it does not exceed 100
          this.stopCarica();
        }
      }, 500);
    } else {
      this.stopCarica();
    }

      

  }

  //STOP AL CARICAMENTO DELLA MACCHINA
  public stopCarica() {
    this.percentualeMacchina = this.percentualeMacchina;
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isMacchinaInCarica = false;
  }

  //FUNZIONE PER AVERE DATI DI UNA MACCHINA SPECIFICA
  public retrieveCar(){
    this.carService.RetrieveCar(this.userID).subscribe({
      next:(res) => {
        this.cars.push(res)  // Ensure cars is an array
        console.table(this.cars)
      },
      error:(err) => {
        console.error('Errore richiesta per avere dati della macchina : ', err)
      }
    })
  }


  public getRechargeStation(){
    this.rechargeService.GetStation().subscribe({
      next: (res) => {
        this.location = res
        console.log("Recharge Station : ",res)
      },
      error:(err) => {
        console.error('Recharge Station not available : ',err)
      }
    })
  }


}
