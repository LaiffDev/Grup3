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
  public RegisterUser(full_name: string,cod_fisc: string,phone_number: string, email: string, secret: string ): Observable<User> {
    const body = {
      full_name: full_name,
      cod_fisc: cod_fisc,
      phone_number: phone_number,
      email: email,
      secret: secret
    };
    return this._http.post<User>(`${environment.baseUrl}/api/users/insert`, body)
  }


  //SERVICE per ricevere tutti gli utenti registrati
  public GetRegisteredUsers(){
    return this._http.get<User>(`${environment.baseUrl}/api/users`)
  }
}
