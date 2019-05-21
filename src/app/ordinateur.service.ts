import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Ordinateur} from './model/ordinateur';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  private url = 'http://localhost:8080/la-factory/rest/ordinateurs';
  private headers: HttpHeaders;
  private httpOptions: any;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/JSON',
      'Authorization': 'Basic ' + btoa('tutu:tutu')
    });

    this.httpOptions = {headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }


  public insert(ordi: Ordinateur): Observable<any> {
    const o = {
      'id': ordi.id,
      'code': ordi.code,
      'coutJournee': ordi.coutJournee,
      'disponibilite': ordi.stagiaires,
      'processeur': ordi.processeur,
      'ram': ordi.quantiteRAM,
      'dd': ordi.quantiteDD,
      'anneeAchat': ordi.anneeAchat,


    }
    return this.http.post(`${this.url}/new`, o, this.httpOptions);
  }

  public update(ordi: Ordinateur): Observable<any> {
    return this.http.put(`${this.url}/${ordi.id}`, ordi, this.httpOptions);
  }
}
