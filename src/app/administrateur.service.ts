import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Administrateur} from './model/administrateur';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private url = urlEnCours + '/la-factory/rest/user/administrateur';
  private headers: HttpHeaders;
  private httpOptions: any;


  constructor(private http: HttpClient, private router: Router) {
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

  public update(administrateur: Administrateur): Observable<any> {
    return this.http.put(`${this.url}/${administrateur.id}`, administrateur, this.httpOptions);
  }

  public insert(administrateur: Administrateur): Observable<any> {
    const a = {
      'nom': administrateur.nom,
      'prenom': administrateur.prenom,
      'adresse': administrateur.adresse,
      'email': administrateur.email,
      'telephone': administrateur.telephone,
      'motDePasse': administrateur.motDePasse
    };

    return this.http.post(this.url, a, {headers: this.headers});
  }


}
