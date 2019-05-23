import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Matiere} from './model/matiere';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class MatieresService {

  private url = urlEnCours + '/la-factory/rest/matiere';
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
      'niveau': matiere.niveau,
      'objectif' : matiere.objectif,
      'prerequis': matiere.prerequis,
      'contenu': matiere.contenu,
      'nbJours': matiere.nbJours
    };
    return this.http.post( `${this.url}`, p, this.httpOptions );
  }
}
