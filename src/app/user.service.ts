import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './model/user';
import {Observable} from 'rxjs';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  constructor(private http: HttpClient, private router: Router) {

  }

  private _isLogged = false;


  get isLogged(): boolean {
    return this._isLogged;
  }

  public authentication(user: User): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${user.email}:${user.motDePasse}`)
      }
    );
    return this.http.get('http://localhost:8080/la-factory/rest/login', {headers: headers});

  }

  public login(user: User) {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('login', user.email);
    this._isLogged = true;
  }

  public logout() {
    sessionStorage.clear();
    this._isLogged = false;
  }

  verifLog() {
    if (this.isLogged) {
      return true;
    } else {
      this.router.navigate(['/login', 'error']);
      return false;
    }
  }

  canActivate() {

    return this.verifLog();
  }
}
