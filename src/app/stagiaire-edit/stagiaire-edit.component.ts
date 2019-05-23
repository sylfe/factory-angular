import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stagiaire} from '../model/stagiaire';
import {StagiaireService} from '../stagiaire.service';

@Component({
  selector: 'app-stagiaire-edit',
  templateUrl: './stagiaire-edit.component.html',
  styleUrls: ['./stagiaire-edit.component.css']
})
export class StagiaireEditComponent implements OnInit {

  private stagiaire: Stagiaire = new Stagiaire();

  constructor(private activedRoute: ActivatedRoute,
              private stagiaireService: StagiaireService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( params => {
      if (params.id) {
        this.stagiaireService.findById(params.id).subscribe( data => {
          this.stagiaire = data;
        });
      }
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

