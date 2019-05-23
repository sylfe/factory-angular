import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ordinateur} from '../model/ordinateur';
import {OrdinateurService} from '../ordinateur.service';
import {StagiaireService} from '../stagiaire.service';

@Component({
  selector: 'app-ordinateurs',
  templateUrl: './ordinateurs.component.html',
  styleUrls: ['./ordinateurs.component.css']
})
export class OrdinateursComponent implements OnInit {
  private ordinateurs: Ordinateur[];
  private message: string = null;


  constructor(private ordinateurService: OrdinateurService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `L'ordinateur "${params.nom}" a été ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.ordinateurService.delete(id).subscribe(result => {
        this.list();
      }
    );
  }

  list() {
    this.ordinateurService.list().subscribe(data => {
      this.ordinateurs = data;
    }, error => {
      console.log(error);
    });

  }

}
