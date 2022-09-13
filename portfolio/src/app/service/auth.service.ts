import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {NuevoUsuario} from '../partes/model/nuevo-usuario';
import { JwtDto } from '../partes/model/jwt-dto';
import {LoginUsuario} from '../partes/model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
authURL = 'https://backenders.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
}
}