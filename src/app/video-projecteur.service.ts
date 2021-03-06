import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VideoProjecteur} from './model/videoProjecteur';
import {urlEnCours} from './urls';

@Injectable({
  providedIn: 'root'
})
export class VideoProjecteurService {
  private url = urlEnCours + '/la-factory/rest/videoprojecteur';
  private headers: HttpHeaders;
  private httpOptions: any;


  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/JSON',
      'Authorization': 'Basic ' + sessionStorage.getItem('basic')
    });

    this.httpOptions = {headers: this.headers};
  }

  public list(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  public listLibre(): Observable<any> {
    return this.http.get(`${this.url}/libre`, this.httpOptions);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions );
  }

  public findById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }


  public insert(videopro: VideoProjecteur): Observable<any> {
    const v = {
      'id': videopro.id,
      'code': videopro.code,
      'coutJournee': videopro.coutJournee,
      'salle': videopro.salle,

    }
    return this.http.post(`${this.url}`, v, this.httpOptions);
  }

  public update(videopro: VideoProjecteur): Observable<any> {
    return this.http.put(`${this.url}/${videopro.id}`, videopro, this.httpOptions);
  }


}
