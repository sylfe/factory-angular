import { Component, OnInit } from '@angular/core';
import {OrdinateurService} from '../ordinateur.service';
import {StagiaireService} from '../stagiaire.service';
import {FormationService} from '../formation.service';
import {Ordinateur} from '../model/ordinateur';
import {Stagiaire} from '../model/stagiaire';
import {Formation} from '../model/formation';

@Component({
  selector: 'app-ordinateur-dispo',
  templateUrl: './ordinateur-dispo.component.html',
  styleUrls: ['./ordinateur-dispo.component.css']
})
export class OrdinateurDispoComponent implements OnInit {


  private ordinateurs: Ordinateur[] = [];
  private stagiaires: Stagiaire[] = [];
  private formations: Formation[] = [];
  private dispo = [];
  constructor(
    private ordinateurService: OrdinateurService,
    private stagiaireService: StagiaireService,
    private formationService: FormationService,
  ) { }

  ngOnInit() {
    this.ordinateurService.list().subscribe( rez => {
      this.ordinateurs = rez;
    });
    this.stagiaireService.list().subscribe( rez => {
      this.stagiaires = rez;
    });
    this.formationService.list().subscribe( rez => {
      this.formations = rez;
    });
  }


  refresh(){
    for (let ordi of this.ordinateurs) {
      for (let sta of this.stagiaires) {
        if(sta.ordinateur != null && sta.ordinateur.id == ordi.id){
          console.log(sta.ordinateur);
        }
        else { console.log('none') }
      }
    }
  }

}
