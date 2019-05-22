import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formateur} from './model/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private url = 'http://10.0.0.205:8080/la-factory/rest/user/formateur';
  private headers: HttpHeaders;
  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`benjamin@benjamin.fr:benjamin`)
    });
    this.httpOptions = { headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get( `${this.url}s`, this.httpOptions);
  }

  public delete(id: number): Observable<any> {

    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  public update(formateur: Formateur): Observable<any> {
    return this.http.put(`${this.url}/${formateur.id}`, formateur, this.httpOptions);
  }

  public insert(formateur: Formateur): Observable<any> {
    const f = {
      'nom': formateur.nom,
      'prenom': formateur.prenom,
      'adresse': formateur.adresse,
      'email': formateur.email,
      'telephone': formateur.telephone,
      'motDePasse': formateur.motDePasse,
      'droits':formateur.droits
    };

    return this.http.post(`${this.url}`, f, this.httpOptions );
  }




}
