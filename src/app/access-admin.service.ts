import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class AccessAdminService implements CanActivate{

  private isAdmin = false;

  constructor(private router: Router) { }

  canActivate() {
    this.isAdmin = false;
    const hey = JSON.parse(sessionStorage.getItem('droits'));
    for(const d in hey) {
      if(hey[d]['droit'] == 'DROIT_ADMIN') {
        this.isAdmin = true;
        console.log(this.isAdmin);
    }
    }
    if(this.isAdmin){ return true };
    this.router.navigate(['/login']);
    return false;
  }
}
