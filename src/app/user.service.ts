import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './model/user';
import {Observable} from 'rxjs';
import {CanActivate, Router} from '@angular/router';
import {FormateurService} from './formateur.service';
import {GestionnaireService} from './gestionnaire.service';
import {TechnicienService} from './technicien.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  private url = 'http://10.0.0.205:8080/la-factory/rest/user';
  private headers: HttpHeaders;
  private httpOptions: any;


  constructor(private http: HttpClient, private router: Router,
              private formateurService: FormateurService, private gestionnaireService: GestionnaireService,
              private technicienService: TechnicienService) {

    this.headers = new HttpHeaders({
      'Content-Type': 'application/JSON',
      'Authorization': 'Basic ' + btoa('benjamin@benjamin.fr:benjamin')
    });

    this.httpOptions = {headers: this.headers};

  }

  private _isLogged = false;


  get isLogged(): boolean {
    return this._isLogged;
  }

  public authentication(user: User): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(`${user.email}:${user.motDePasse}`)
      }
    );
    return this.http.get('http://localhost:8080/la-factory/rest/login', { headers: headers });

  }

  public login(user: User) {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('login', user.email);
    sessionStorage.setItem('mdp', user.motDePasse);
    sessionStorage.setItem('basic', btoa(user.email + ':' + user.motDePasse));
    let us: User;
    this.findByEmail(user.email).subscribe( result => {
      us = result;
      this.gestionnaireService.findById(us.id).subscribe( rez => {
        sessionStorage.setItem('gestionnaire', 'true');
      });
      this.technicienService.findById(us.id).subscribe( rez => {
        sessionStorage.setItem('technicien', 'true');
      });
      this.formateurService.findById(us.id).subscribe( rez => {
        sessionStorage.setItem('formateur', 'true');
      });
      console.log(us);
      sessionStorage.setItem('droits', JSON.stringify(us.droits));
      console.log(sessionStorage.getItem('droits'));
      console.log(JSON.parse(sessionStorage.getItem('droits'))[0]['droit']);
      const hey = JSON.parse(sessionStorage.getItem('droits'));
      for(const d in hey) {
          console.log(hey[d]['droit']);
          if(hey[d]['droit'] == 'DROIT_ADMIN') { sessionStorage.setItem('admin', 'true');}
        }

    })

    this._isLogged = true;
  }

  public logout() {
    sessionStorage.clear();
    this._isLogged = false;
  }

  verifLog() {
    if (this.isLogged) {
      return true;
    } else {
      this.router.navigate(['/login', 'error']);
      return false;
    }
  }

  canActivate() {

    return this.verifLog();
  }


  public findByEmail(email): Observable<any> {
    return this.http.get(`${this.url}/${email}`, this.httpOptions);
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

  public update(user: User): Observable<any> {
    return this.http.put(`${this.url}/${user.id}`, user, this.httpOptions);
  }

  public insert(user: User): Observable<any> {
    // à revoir pour les droits !!

    const u = {
      'nom': user.nom,
      'prenom': user.prenom,
      'adresse': user.adresse,
      'email': user.email,
      'telephone': user.telephone,
      'motDePasse': user.motDePasse

    };


    return this.http.post(this.url, u, this.httpOptions);
  }

}
