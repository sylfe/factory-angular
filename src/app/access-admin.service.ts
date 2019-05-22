import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class AccessAdminService implements CanActivate{

  private isAdmin = false;

  constructor() { }

  canActivate() {
    const d = sessionStorage.getItem('droits');
    const dd = JSON.parse(d);
    console.log(dd);
    for ( const ddd in dd) {
      if(ddd){
        this.isAdmin = true;
      }
    }
    return this.isAdmin
  }
}
