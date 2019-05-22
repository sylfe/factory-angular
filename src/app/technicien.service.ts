import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matiere} from './model/matiere';
import {Technicien} from './model/technicien';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

  private url = 'http://10.0.0.205:8080/la-factory/rest/user/technicien';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Basic ' + btoa('benjamin@benjamin.fr:benjamin'),
      'Access-Control-Allow-Origin' : '*'
    });
    this.httpOptions = { headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  public login(options): Observable<any> {
    return this.http.get(`${this.url}/1`, options);
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
      'droits': [{ 'droit': }]
    };
    return this.http.post( `${this.url}`, p, this.httpOptions );
  }
}
