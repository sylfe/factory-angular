import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  private nouvelleFormation: FormGroup;


  constructor(private activatedRoute: ActivatedRoute, private formationService: FormationService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      if(params.id) {
        this.formationService.findById(params.id).subscribe(data => {
          this.formation = data;
        });
      }
    });
  }
  save() {
    if(this.formation.id) {
      this.formationService.update(this.formation).subscribe( result => {
        this.router.navigate(['/formations', 'modifié', this.formation.titre]);
      });
    } else {
      this.formationService.insert(this.formation).subscribe(result => {
        this.router.navigate(['/produits', 'ajouté', this.formation.titre]);
      });
    }
  }
}
