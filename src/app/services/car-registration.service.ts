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
    public CarRegister(manufacturer: string, model: string,plate: string ): Observable<Car> {
      const body = {
        manufacturer: manufacturer,
        model: model,
        plate: plate,
      };
      return this._http.post<Car>(`${environment.baseUrl}/api/cars/insert`, body)
    }
}
