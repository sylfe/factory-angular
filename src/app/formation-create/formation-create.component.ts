import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormateurService} from '../formateur.service';
import {Formation} from '../model/formation';

@Component({
  selector: 'app-formation-create',
  templateUrl: './formation-create.component.html',
  styleUrls: ['./formation-create.component.css']
})
export class FormationCreateComponent implements OnInit {

  private formation: Formation = new Formation();
  constructor(private activedRoute: ActivatedRoute,
              private formationService: FormationService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( params => {
      if (params.id) {
        this.formationService.findById(params.id).subscribe( data => {
          this.formation = data;
        });
      }
    });
  }

  save() {
    if (this.formation.id) {
      this.formationService.update(this.formation).subscribe(result => {
        this.router.navigate(['/formation', 'modifié', this.formation.titre]);
      });
    } else {
      console.log('ok');
      this.formationService.insert(this.formation).subscribe( result => {
        this.router.navigate(['/formateur', 'ajouté', this.formateur.nom]);
      });
    }
  }

}
