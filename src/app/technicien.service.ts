import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matiere} from './model/matiere';
import {Technicien} from './model/technicien';
import {Droit} from './model/droit.enum';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

private url = urlEnCours + '/la-factory/rest/user/technicien';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Basic ' + sessionStorage.getItem('basic'),
      'Access-Control-Allow-Origin' : '*'
    });
    this.httpOptions = { headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(`${this.url}s`, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }


  public update(technicien: Technicien): Observable<any> {
    return this.http.put(`${this.url}/${technicien.id}`, technicien, this.httpOptions);
  }

  public  insert(technicien: Technicien): Observable<any> {
    const p = {
      'nom' : technicien.nom,
      'email': technicien.email,
      'motDePasse' : technicien.motDePasse,
      'adresse': technicien.adresse,
      'prenom': technicien.prenom,
      'telephone': technicien.telephone,
 'droits': technicien.droits
    };
    return this.http.post( `${this.url}`, p, this.httpOptions );
  }
}
