import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarRegistrationService {

  constructor(private _http: HttpClient) { }

    //SERVICE per la registrazione dell'utente
    public CarRegister(manufacture: string, car_model: string,car_plate: string ): Observable<Car> {
      const body = {
        manufacture: manufacture,
        car_model: car_model,
        car_plate: car_plate,
      };
      return this._http.post<Car>(`${environment.baseUrl}/api/cars/insert`, body)
    }
}
