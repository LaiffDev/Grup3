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
  public RegisterUser(full_name: string, phone_number: string, cod_fisc: string, email: string, secret: string ): Observable<User> {
    const body = {
      full_name: full_name,
      phone_number: phone_number,
      cod_fisc: cod_fisc,
      email: email,
      secret: secret
    };
    return this._http.post<User>(`${environment.baseUrl}/api/users/insert`, body)
  }

  //SERVICE il login dell'utente
  public LoginUser(email: string, secret: string): Observable<User>{
    const body = { 
      email:email,
      secret: secret
    }
    return this._http.post<User>(`${environment.baseUrl}/api/users`, body)
  }

  public RetrieveUserById(id:string): Observable<User>{
    return this._http.get<User>(`${environment.baseUrl}/${id}`);
  }
  
}
