import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formateur} from './model/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService implements CanActivate {

  private url = 'http://localhost:8080/la-factory/rest/formateur';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {

  }

  private isLogged = false;

  get isLogged(): boolean {
    return this.isLogged;
  }

  public authentication(formateur: Formateur): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${formateur.email}:${formateur.motDePasse}`)
    });
    return this.http.get('http://localhost:8080/la-factory/rest/login', {headers: headers});
  }

  public login(formateur: Formateur) {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('login', formateur.email);
    this.isLogged = true;
  }

  public logout() {
    sessionStorage.clear();
    this.isLogged = false;
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


  public list() {
    return this.http.get(this.url, this.httpOptions);
  }

  public delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  public update(formateur: Formateur): Observable<any> {
    return this.http.put(`${this.url}/${formateur.id}`, formateur, this.httpOptions);
  }

  public insert(formateur: Formateur): Observable<any> {
    const f = {
      'nom': formateur.nom,
      'prenom': formateur.prenom,
      'adresse': formateur.adresse,
      'email': formateur.email,
      'telephone': formateur.telephone,
      'motDePasse': formateur.motDePasse
    };

    return this.http.post(this.url, f, this.httpOptions);
  }


}
