import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Formation} from "./model/formation";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private url = 'http://10.0.0.205:8080/la-factory/rest/formations';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient, private router: Router) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/JSON',
      'Authorization': 'Basic ' + btoa('karen@karen.fr:karen')
    });

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
      'dateFin': formation.dateFin
    }
    return this.http.post(`${this.url}`, f, {
      observe: 'response',
      headers: this.headers
    });
  }
}
