import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factory-angular';

  private connect = sessionStorage.getItem('isLoggedIn');

  logout() {
    this.authentification.logout();
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  constructor(private authentification: UserService, private router: Router) {

  }



}
