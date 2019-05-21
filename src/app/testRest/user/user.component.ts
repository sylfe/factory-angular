import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../model/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  private users: User[];
  private message: string = null;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
  }


  list() {
    this.userService.list().subscribe(data => {
      this.users = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if(params.nom){
        this.message = `user ${params.nom} ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(result => this.list());
  }

}
