import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materiel} from './model/materiel';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private url = urlEnCours + '/la-factory/rest/materiel';
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


  public insert(materiel: Materiel): Observable<any> {
    const m = {
      'id': materiel.id,
      'version': materiel.version++,
      'code': materiel.code,
      'coutJournee': materiel.coutJournee,

    }
    return this.http.post(`${this.url}/new`, m, this.httpOptions);
  }

  public update(materiel: Materiel): Observable<any> {
    return this.http.put(`${this.url}/${materiel.id}`, materiel, this.httpOptions);
  }


}
