import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  private user: User = new User();
  constructor(private authentication: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user.email = 'benjamin@benjamin.fr';
    this.user.motDePasse = 'benjamin';
    this.authentication.authentication(this.user).subscribe(result => {
      this.authentication.login(this.user);
      console.log(result);
      sessionStorage.setItem('droits', JSON.stringify(result.getItem('droits')))
      console.log('ok');
    }, error1 => {
      console.log(error1);
    });
  }

}
