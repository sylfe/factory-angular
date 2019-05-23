import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stagiaire} from '../model/stagiaire';
import {StagiaireService} from '../stagiaire.service';
import {OrdinateurService} from '../ordinateur.service';
import {Ordinateur} from '../model/ordinateur';
import {Formation} from '../model/formation';
import {FormationService} from '../formation.service';

@Component({
  selector: 'app-stagiaire-edit',
  templateUrl: './stagiaire-edit.component.html',
  styleUrls: ['./stagiaire-edit.component.css']
})
export class StagiaireEditComponent implements OnInit {

  private stagiaire: Stagiaire = new Stagiaire();
  private ordinateurs: Ordinateur[] ;
  private formations: Formation[];

  constructor(private activedRoute: ActivatedRoute,
              private stagiaireService: StagiaireService,
              private ordinateurService: OrdinateurService,
              private formationService: FormationService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( params => {
      if (params.id) {
        this.stagiaireService.findById(params.id).subscribe( data => {
          this.stagiaire = data;
        });
      }
    });
    this.list();
  }

  list() {
    this.ordinateurService.list().subscribe(data => {
      this.ordinateurs = data;
    }, error => {
      console.log(error);
    });
    this.formationService.list().subscribe(data2 => {
      this.formations = data2;
    }, error => {
      console.log(error);
    });
  }

  save() {
    if (this.stagiaire.id) {
      this.stagiaireService.update(this.stagiaire).subscribe(result => {
        this.router.navigate(['/stagiaire', 'modifié', this.stagiaire.nom]);
      });
    } else {
      this.stagiaireService.insert(this.stagiaire).subscribe(result => {
        this.router.navigate(['/stagiaire', 'ajouté', this.stagiaire.nom]);
      });
    }
  }

}

