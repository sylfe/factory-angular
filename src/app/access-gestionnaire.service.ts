import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGestionnaireService {

  private isAdmin = false;

  constructor(private router: Router) { }

  canActivate() {
    this.isAdmin = false;

    const hey = JSON.parse(sessionStorage.getItem('droits'));
    for(const d in hey) {
      if(hey[d]['droit'] == 'DROIT_GESTIONNAIRE') {
        this.isAdmin = true;
      }
      if(hey[d]['droit'] == 'DROIT_ADMIN') {
        this.isAdmin = true;
      }
      if(sessionStorage.getItem('gestionnaire')){
        this.isAdmin = true;
      }
    }
    if(this.isAdmin){ return true };
    this.router.navigate(['/login']);
    return false;
  }
}
