import { Component} from '@angular/core';
import { User } from '../../models/user';
import { CarRegistrationService } from '../../services/car-registration.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
 

  cars:any = []

  user: User | undefined;
  userID: string | null = null;
  isMacchinaInCarica: boolean = false
  percentualeMacchina: number = 0
  intervalId: any

  carModels = {
    i3 : '../../../assets/images/bwm-i3.png',
    model3 : '../../../assets/images/model-3.png'
  }


  constructor(
    private carService: CarRegistrationService,) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.userID = localStorage.getItem('userID');
    }

    this.retrieveCar()

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
        this.cars.push(res)
        console.log("Dati macchina : ", this.cars)
      },
      error:(err) => {
        console.error('Errore richiesta per avere dati della macchina : ', err)
      }
    })
  }

}
