import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-editer',
  templateUrl: './user-editer.component.html',
  styleUrls: ['./user-editer.component.css']
})
export class UserEditerComponent implements OnInit {

  private user: User = new User();

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        if (params.id) {
          this.userService.findById(params.id).subscribe(data => {
            this.user = data;
          });
        }
      }
    );
  }

  save() {
    if (this.user.id) {
      this.userService.update(this.user).subscribe(result => {
        this.router.navigate(['/user', 'modifié', this.user.email]);
      });
    } else {
      this.userService.insert(this.user).subscribe(result => {
        this.router.navigate(['/user', 'ajouté', this.user.email]);
      });
    }
  }

}
