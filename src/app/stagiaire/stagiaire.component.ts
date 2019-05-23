import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Stagiaire} from '../model/stagiaire';
import { StagiaireService} from '../stagiaire.service';
import {OrdinateurService} from '../ordinateur.service';
import {Ordinateur} from '../model/ordinateur';
import {FormationService} from '../formation.service';
import {Formation} from '../model/formation';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {

  private stagiaires: Stagiaire[];
  private message: string = null;
  private ordinateurs: Ordinateur[];
  private formations: Formation[];

  constructor(private stagiaireService: StagiaireService,
              private ordinateurService: OrdinateurService,
              private formationService: FormationService,
              private activatedRoute: ActivatedRoute) { }


  list() {
    this.stagiaireService.list().subscribe(data => {
      this.stagiaires = data;
      console.log(this.stagiaires);
    }, error => {
      console.log(error);
    });
    this.ordinateurService.list().subscribe(result => {
      this.ordinateurs = result;
    }, error => {
      console.log(error);
    });
    this.formationService.list().subscribe(result2 => {
      this.formations = result2;
    }, error => {
      console.log(error);
    });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `Le stagiaire ${params.nom} a bien été ${params.action}`;
      }
    });
    this.list();
    console.log('coucou');
  }

  delete(id: number) {
    this.stagiaireService.delete(id).subscribe(result => this.list());
  }


}
