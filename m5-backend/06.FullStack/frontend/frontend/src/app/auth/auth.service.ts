import { Injectable, NgProbeToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { BASE_URL, TOKEN } from '../shared/constants';



export interface Token{
  sub: number;// id del usuario
  email: string;
  role: string;
  exp: number; // timestamp con la fecha de expiración
  iat: number; // Issued at: campo con la fecha de emisón del token
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url: string = `${BASE_URL}/auth`;

  //BehaviorSubject emite valores a subcriptores, equivale a Observable especializado

  isAdmin = new BehaviorSubject<boolean>(this.hasAdminToken());
  isOwner = new BehaviorSubject<boolean>(this.hasOwnerToken());
  isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());


  constructor(private httpClient: HttpClient,
              private router: Router) { }

  login(login: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, login);
  }

  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }

  logout(){
    localStorage.removeItem(TOKEN);//revisar constant.ts archivos para constantes
    this.router.navigate(['/auth/login']);

  //Cuando cierra la sesión se colocan la variables en falso
    this.isAdmin.next(false);
    this.isOwner.next(false);
    this.isLoggedIn.next(false);
  }

  hasAdminToken(): boolean{
    let token = localStorage.getItem(TOKEN);
    if (!token) return false;

    let decoded_token: Token = jwt_decode(token);
    return decoded_token.role === 'admin';
  }

  hasOwnerToken(): boolean{
    let token = localStorage.getItem(TOKEN);
    if (!token) return false;

    let decoded_token: Token = jwt_decode(token);
    return decoded_token.role === 'owner';
  }
 
  hasToken(): boolean{
    console.log('checking hasToken()')
    return localStorage.getItem(TOKEN) !== null;
  }

  handleLoginResponse(token: any){
    //Guarda el token es localStorage, actualiza isAdmin y isLoggedIn
    localStorage.setItem(TOKEN, token);
    let decoded_token: Token = jwt_decode(token);
    this.isAdmin.next(decoded_token.role === 'admin');
    this.isOwner.next(decoded_token.role === 'owner');
    this.isLoggedIn.next(true);
  }

  /**isLoggedIn(){
    return localStorage.getItem('jwt_token') !==null;
  }

  isAdmin(){
    let token = localStorage.getItem('jwt_token') ?? '';

    try{
      let decoded_token: Token = jwt_decode(token);

      let isAdmin = decoded_token.role === 'admin';

      return isAdmin;

    } catch(error){
      console.log(error);

    }
    return false;
  }*/

  // ... más comprobaciones ...
  // comprobar un rol
  // comprobar si ha iniciado sesión
  // logout

}