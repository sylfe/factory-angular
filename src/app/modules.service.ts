import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from './model/module';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  private url = 'http://localhost:8080/la-factory/rest/matiere';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Basic ' + btoa('tutu:tutu'),
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


  public update(module: Module): Observable<any> {
    return this.http.put(`${this.url}/${module.id}`, module, this.httpOptions);
  }

  public  insert(module: Module): Observable<any> {
    const p = {
      'dateDebut' : module.dateDebut,
      'module' : module.matiere
    };
    return this.http.post( `${this.url}/insert`, p, this.httpOptions );
  }
}
