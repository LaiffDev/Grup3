import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor(private _http: HttpClient) { }


  //SERVICE per la registrazione dell'utente
  public RegisterUser(full_name: string, cod_fisc: string, phone_number: string, email: string, secret: string ): Observable<User> {
    const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const body = {
      id: id,
      full_name: full_name,
      cod_fisc: cod_fisc,
      phone_number: phone_number,
      email: email,
      secret: secret
    };
    return this._http.post<User>(`${environment.baseUrl}/api/users/insert`, body)
  }

  //SERVICE il login dell'utente
  public LoginUser(email, secret): Observable<User>{
    const body = { 
      email:email,
      secret: secret
    }
    return this._http.post<User>(`${environment.baseUrl}/api/users`, body)
  }
  
}
