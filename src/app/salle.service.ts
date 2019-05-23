import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Salle} from './model/salle';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
//  private url = 'http://10.0.0.205:8080/la-factory/rest/salle';
  private url = urlEnCours + '/la-factory/rest/salle';
  private headers: HttpHeaders;
  private httpOptions: any;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/JSON',
      'Authorization': 'Basic ' + btoa(sessionStorage.getItem('basic'))
    });

    this.httpOptions = {headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions );
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }


  public insert(salle: Salle): Observable<any> {
    const v = {
      'id': salle.id,
      'code': salle.code,
      'coutJournee': salle.coutJournee,
      'videoprojecteur': { id : salle.videoprojecteur.id},
      'capacite': salle.capacite,
    }
    return this.http.post(`${this.url}`, v, this.httpOptions);
  }

  public update(salle: Salle): Observable<any> {
    return this.http.put(`${this.url}/${salle.id}`, salle, this.httpOptions);
  }


}

