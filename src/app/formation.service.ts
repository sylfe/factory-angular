import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Formation} from "./model/formation";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private url = 'http://localhost:8080/la-factory/rest/formation';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('tutu:tutu')
      }
    );
    this.httpOptions = {headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(this.url, {headers: this.headers});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  public update(formation: Formation): Observable<any> {
    return this.http.put(`${this.url}/${formation.id}`, formation, this.httpOptions);
  }

  public insert(formation: Formation): Observable<any> {
    const f = {
      'titre': formation.titre,
      'dateDebut': formation.dateDebut,
      'dateFin': formation.dateFin,
    }
    return this.http.post(this.url, f, this.httpOptions);
  }
}
