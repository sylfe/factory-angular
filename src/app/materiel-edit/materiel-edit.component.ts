import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Ordinateur} from '../model/ordinateur';
import {VideoProjecteur} from '../model/videoProjecteur';
import {Salle} from '../model/salle';
import {OrdinateurService} from '../ordinateur.service';
import {VideoProjecteurService} from '../video-projecteur.service';
import {SalleService} from '../salle.service';

@Component({
  selector: 'app-materiel-edit',
  templateUrl: './materiel-edit.component.html',
  styleUrls: ['./materiel-edit.component.css']
})
export class MaterielEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private ordinateurService: OrdinateurService,
              private videoProjecteurService: VideoProjecteurService,
              private salleService: SalleService,
              private router: Router) { }

  private ordinateur: Ordinateur = new Ordinateur();
  private videoProjecteur: VideoProjecteur = new VideoProjecteur();
  private salle: Salle = new Salle();

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        if (this.ordinateur.id) {
          this.ordinateurService.findById(params.id).subscribe(data => {
            this.ordinateur = data;
          });
        }
        if (this.videoProjecteur.id) {
          this.videoProjecteurService.findById(params.id).subscribe(data => {
            this.videoProjecteur = data;
          });
        }
      }
      if (this.salle.id) {
        this.salleService.findById(params.id).subscribe(data => {
          this.salle = data;
        });
      }
    });
  }


  save() {

    // methode save pour ordinateur
    if (this.ordinateur.id) {
      this.ordinateurService.update(this.ordinateur).subscribe(result => {
        this.router.navigate(['/ordinateurs', 'modifié', this.ordinateur.code]);

      });
    } else if (this.ordinateur.processeur) {
      this.ordinateurService.insert(this.ordinateur).subscribe(result => {
        this.router.navigate(['/ordinateurs', 'ajouté', this.ordinateur.code]);
      });

    }
// methode save pour viode projecteur
    if (this.videoProjecteur.id) {
      this.videoProjecteurService.update(this.videoProjecteur).subscribe(result => {
        this.router.navigate(['/videoprojecteurs', 'modifié', this.videoProjecteur.code]);

      });
    } else if (this.videoProjecteur.coutJournee) {
      this.videoProjecteurService.insert(this.videoProjecteur).subscribe(result => {
        this.router.navigate(['/videoprojecteurs', 'ajouté', this.videoProjecteur.code]);
      });

    }
// methode save pour salle
    if (this.salle.id) {
      this.salleService.update(this.salle).subscribe(result => {
        this.router.navigate(['/salles', 'modifié', this.salle.code]);

      });
    } else if (this.salle.capacite) {
      this.salleService.insert(this.salle).subscribe(result => {
        this.router.navigate(['/salles', 'ajouté', this.salle.code]);
      });

    }
  }
}
