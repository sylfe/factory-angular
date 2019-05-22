import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TechnicienService} from '../technicien.service';
import {Technicien} from '../model/technicien';


@Component({
  selector: 'app-technicien-edit',
  templateUrl: './technicien-edit.component.html',
  styleUrls: ['./technicien-edit.component.css']
})
export class TechnicienEditComponent implements OnInit {
  private technicien: Technicien = new Technicien();
  constructor(private activedRoute: ActivatedRoute,
              private technicienService: TechnicienService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( params => {
      if (params.id) {
        this.technicienService.findById(params.id).subscribe( data => {
          this.technicien = data;
        });
      }
    });
  }

  save() {
    if (this.technicien.id) {
      this.technicienService.update(this.technicien).subscribe(result => {
        this.router.navigate(['/technicien', 'modifé', this.technicien.nom]);
      });
    } else {
      console.log('ok');
      this.technicienService.insert(this.technicien).subscribe(result => {
        this.router.navigate(['/technicien', 'ajouté', this.technicien.nom]);
      });
    }
  }

}
