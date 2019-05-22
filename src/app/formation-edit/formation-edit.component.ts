import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Formation} from '../model/formation';
import {FormationService} from '../formation.service';
import {Matiere} from '../model/matiere';
import {MatieresService} from '../matieres.service';
import {Formateur} from '../model/formateur';
import {FormateurService} from '../formateur.service';

@Component({
  selector: 'app-formation-edit',
  templateUrl: './formation-edit.component.html',
  styleUrls: ['./formation-edit.component.css']
})
export class FormationEditComponent implements OnInit {

  private matieres: Matiere[];
  private formateurs: Formateur[];

  private formation: Formation = new Formation();

  constructor(private activedRoute: ActivatedRoute,
              private formationService: FormationService,
              private matiereService: MatieresService,
              private formateurService: FormateurService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( params => {
      if (params.id) {
        this.formationService.findById(params.id).subscribe( data => {
          this.formation = data;
        });
      }
    });
    this.listMatiere();
    this.listFormateur();
  }

  save() {
    if (this.formation.id) {
      this.formationService.update(this.formation).subscribe(result => {
        this.router.navigate(['/formation', 'modifié', this.formation.titre]);
      });
    } else {
      console.log('ok');
      this.formationService.insert(this.formation).subscribe( result => {
        this.router.navigate(['/formation', 'ajouté', this.formation.titre]);
      });
    }
  }

  listMatiere() {
    this.matiereService.list().subscribe( data => {
      this.matieres = data;
      console.log(this.matieres);
    }, error => {
      console.log('error');
    });
  }

  listFormateur() {
    this.formateurService.list().subscribe( data => {
      this.formateurs = data;
      console.log(this.formateurs);
    }, error => {
      console.log('error');
    });
  }
}
