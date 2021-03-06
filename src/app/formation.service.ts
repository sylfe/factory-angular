import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formation} from './model/formation';
import {Router} from '@angular/router';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private url = urlEnCours + '/la-factory/rest/formations';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/JSON',
      'Authorization': 'Basic ' + sessionStorage.getItem('basic')
    });

    this.httpOptions = {headers: this.headers};

  }

  public list(): Observable<any> {
    return this.http.get(this.url + '/salle', {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}` , this.httpOptions);
  }

  public findByIdModules(id): Observable<any> {
    return this.http.get(`${this.url}/${id}/modules` , this.httpOptions);
  }

  public findByTitre(titre: string): Observable<any> {
    return this.http.get(`${this.url}/${titre}`, this.httpOptions);
  }

  public update(formation: Formation): Observable<any> {
    return this.http.put(`${this.url}/${formation.id}`, formation, this.httpOptions);
  }

  public insert(formation: Formation): Observable<any> {
    const f = {
      'titre': formation.titre,
      'dateDebut': formation.dateDebut,
      'dateFin': formation.dateFin,
      'salle': { id : formation.salle.id}
    }
    return this.http.post(`${this.url}`, f, {
      headers: this.headers,
      observe: 'response'
    });
  }
}
