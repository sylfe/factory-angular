import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private login: string = null;

  constructor() { }


  ngOnInit() {
    if(sessionStorage.getItem('isLoggedIn')){
      this.login = sessionStorage.getItem('login');
    }
  }

}
