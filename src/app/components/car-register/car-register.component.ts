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
    manufacture : new FormControl('',[Validators.required]),
    car_model : new FormControl('',[Validators.required]),
    car_plate : new FormControl('',[Validators.required]),
  })

  registerCar(){
    const { manufacture, car_model, car_plate} = this.CarRegisterForm.value;

    this.carService.CarRegister(manufacture, car_model, car_plate).subscribe({
      next: (res) => {
        if(this.CarRegisterForm.invalid){
          console.error('Not all fields are completed')
        }
        else{
          console.log(`User registered successfully: ${res}`);
          this.router.navigate(['home'])
        }
      },
      error: (err) => {
        console.error(`Error registering user: ${err}`);
      }
    });
  }
}
