import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarRegistrationService } from '../../services/car-registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrl: './car-register.component.css',
})
export class CarRegisterComponent {
  hide = true;

  constructor(private carService : CarRegistrationService, private router : Router){}

  CarRegisterForm = new FormGroup({
    plate : new FormControl('',[Validators.required]),
    manufacturer : new FormControl('',[Validators.required]),
    model : new FormControl('',[Validators.required])
  })

  registerCar(){
    const { plate, manufacturer, model } = this.CarRegisterForm.value;
    const userID = localStorage.getItem('userID')

    if(plate && manufacturer && model && plate.length === 7){
      this.carService.CarRegister(plate, manufacturer, model, userID).subscribe({
        next:(res) => {
          console.log(res)
          alert('Macchina registrata con successo!')
          this.router.navigate(["home"])
        },
        error:(err) => {
          console.error('Errore nella registrazione: ', err)
        }
      })
    }
    else{
      alert('Campi non validi!')
    }
  }
}
