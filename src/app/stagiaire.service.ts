import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stagiaire} from './model/stagiaire';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private url = urlEnCours + '/la-factory/rest/user/stagiaire';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(sessionStorage.getItem('basic'))
    });
    this.httpOptions = {headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(`${this.url}s`, this.httpOptions);
  }

  public delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  public update(stagiaire: Stagiaire): Observable<any> {
    return this.http.put(`${this.url}/${stagiaire.id}`, stagiaire, this.httpOptions);
  }

  public insert(stagiaire: Stagiaire): Observable<any> {
    const s = {
      'nom': stagiaire.nom,
      'prenom': stagiaire.prenom,
      'adresse': stagiaire.adresse,
      'email': stagiaire.email,
      'telephone': stagiaire.telephone,
      'motDePasse': stagiaire.motDePasse,
      'ordinateur': {id: stagiaire.ordinateur.id},

    };
    console.log(stagiaire);
    return this.http.post(`${this.url}`, s, this.httpOptions);
  }
}
