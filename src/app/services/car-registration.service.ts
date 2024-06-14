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
    public CarRegister(plate:string, manufacturer:string, model:string): Observable<Car> {
      const body = {
        plate: plate,
        manufacturer: manufacturer,
        model: model
      };
      return this._http.post<Car>(`${environment.baseUrl}/api/cars/insert`, body)
    }
}
