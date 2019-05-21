import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();
  private message = null;

  constructor(private authentication: UserService, private router: Router, private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        if (params.error) {
          this.message = 'il faut vous connecter pour aller sur cette page';
        }
      }
    );
  }


  send() {
    this.authentication.authentication(this.user).subscribe(result => {
      this.authentication.login(this.user);
      this.router.navigate(['/']);
      console.log('ok');
    }, error1 => {
      this.message = `erreur d'authentification`;
    });
  }

}
