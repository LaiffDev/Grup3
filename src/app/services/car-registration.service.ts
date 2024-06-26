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

    //SERVICE per la registrazione dell'auto
    public CarRegister(plate:string, manufacturer:string, model:string, userID:string,battery_capacity : string): Observable<Car> {
      const body = {
        plate: plate,
        manufacturer: manufacturer,
        model: model,
        owner_id: userID,
        battery_capacity : battery_capacity
      };
      return this._http.post<Car>(`${environment.baseUrl}/api/cars/insert`, body)
    }

    public RetrieveCar(user_id: string):Observable<Car[]>{
      return this._http.get<Car[]>(`${environment.baseUrl}/api/cars/${user_id}`)
    }
}