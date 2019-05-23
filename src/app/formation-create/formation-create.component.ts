import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/formation";
import {ActivatedRoute, Router} from "@angular/router";
import {FormationService} from "../formation.service";

@Component({
  selector: 'app-formation-create',
  templateUrl: './formation-create.component.html',
  styleUrls: ['./formation-create.component.css']
})
export class FormationCreateComponent implements OnInit {
  private formation: Formation = new Formation();

private verif: boolean;
  constructor(private activatedRoute: ActivatedRoute, private formationService: FormationService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.formationService.findById(params.id).subscribe(data => {
          this.formation = data;
        });
      }
    });
  }

  save() {
    if (this.formation.id) {
      this.formationService.update(this.formation).subscribe(result => {
        this.router.navigate(['/formation', 'edit', this.formation.id]);
      });
    } else {
      this.formationService.insert(this.formation).subscribe(result => {
        console.log(result);
        this.router.navigate(['/formations']);
      });
    }
  }
  checkDate() {
    if (this.formation.dateDebut > this.formation.dateFin) {
     this.verif = true;
     return this.verif;
    } else {
      this.verif = false;
      return this.verif;
    }
  }
}
