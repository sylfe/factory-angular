import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Gestionnaire} from './model/gestionnaire';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireService  {

  private urll = urlEnCours;
  private url = urlEnCours + '/la-factory/rest/user/gestionnaire';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + sessionStorage.getItem('basic')
  });
  this.httpOptions = { headers: this.headers};
  }


  public list(): Observable<any> {
    return this.http.get( `${this.url}s`, this.httpOptions);
  }

  public delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  public update(gestionnaire: Gestionnaire): Observable<any> {
    return this.http.put(`${this.url}/${gestionnaire.id}`, gestionnaire, this.httpOptions);
  }

  public insert(gestionnaire: Gestionnaire): Observable<any> {
    const g = {
      'nom': gestionnaire.nom,
      'prenom': gestionnaire.prenom,
      'adresse': gestionnaire.adresse,
      'email': gestionnaire.email,
      'telephone': gestionnaire.telephone,
      'motDePasse': gestionnaire.motDePasse
    };

    return this.http.post(this.url, g, {headers : this.headers});
  }


}
