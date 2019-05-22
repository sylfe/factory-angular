import { Component, OnInit } from '@angular/core';
import {Formateur} from '../model/formateur';
import {Gestionnaire} from '../model/gestionnaire';
import {FormateurService} from '../formateur.service';
import {ActivatedRoute} from '@angular/router';
import {GestionnaireService} from '../gestionnaire.service';

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent implements OnInit {

  private gestionnaires: Gestionnaire[];
  private message: string = null;

  constructor(private gestionnaireService: GestionnaireService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `gestionnaire ${params.nom} ${params.action}`;
      }
    });
    this.list();
  }


  list() {
    this.gestionnaireService.list().subscribe(data => {
      this.gestionnaires = data;
      console.log('ok');
    }, error => {
      console.log(error);
    });
  }


  delete(id: number) {
    this.gestionnaireService.delete(id).subscribe(result => this.list());
  }

}
