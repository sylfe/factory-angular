import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ordinateur} from './model/ordinateur';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {
  private url = urlEnCours + '/la-factory/rest/ordinateur';
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
  public listStagiaire(): Observable<any> {
    return this.http.get(`${this.url}/stagiaire`, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }


  public insert(ordi: Ordinateur): Observable<any> {
    const o = {
      'code': ordi.code,
      'coutJournee': ordi.coutJournee,
      'processeur': ordi.processeur,
      'quantiteRAM': ordi.quantiteRAM,
      'quantiteDD': ordi.quantiteDD,
      'anneeAchat': ordi.anneeAchat,


    }
    return this.http.post(`${this.url}`, o, this.httpOptions);
  }

  public update(ordi: Ordinateur): Observable<any> {
    return this.http.put(`${this.url}/${ordi.id}`, ordi, this.httpOptions);
  }
}
