import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  constructor(private _http: HttpClient) { }

  public GetStation(): Observable<any>{
    return this._http.get<any>(`${environment.baseUrl}/api/stations`)
  }
}
