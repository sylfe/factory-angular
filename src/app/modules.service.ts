import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from './model/module';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  private url = urlEnCours + '/la-factory/rest/module';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : 'Basic ' + sessionStorage.getItem('basic'),
    });
    this.httpOptions = { headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(this.url + '/matiere/formation/formateur', this.httpOptions);
  }

  public findByFormation(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}` + '/matiere/formation/formateur', this.httpOptions);
  }

  public findByIdMatiere(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}/matiere/formateur`, this.httpOptions);
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
      'matiere' : {
        'id' : module.matiere.id
      },
      'formateur': {
        'id' : module.formateur.id
      },
      'formation': {
        'id': module.formation.id
      }
    };
    console.log(p);
    return this.http.post( `${this.url}` + '/matiere/formation/formateur', p, this.httpOptions );
  }
}
