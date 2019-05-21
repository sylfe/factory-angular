import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matiere} from './model/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatieresService {

  private url = 'http://10.0.0.205:8080/la-factory/rest/matiere';
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


  public update(matiere: Matiere): Observable<any> {
    return this.http.put(`${this.url}/${matiere.id}`, matiere, this.httpOptions);
  }

  public  insert(matiere: Matiere): Observable<any> {
    const p = {
      'nom' : matiere.nom,
      'objectif' : matiere.objectif,
      'niveau': matiere.niveau
    };
    return this.http.post( `${this.url}`, p, this.httpOptions );
  }
}
