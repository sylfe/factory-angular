import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SalleService} from '../salle.service';
import {Salle} from '../model/salle';
import {VideoProjecteur} from '../model/videoProjecteur';
import {VideoProjecteurService} from '../video-projecteur.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  private salles: Salle[];
  private videoprojecteurs: VideoProjecteur[];
  private message: string = null;


  constructor(private salleService: SalleService, private videoprojecteurService: VideoProjecteurService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `La salle "${params.nom}" a été ${params.action}`;
      }
    });
    this.list();

    this.videoprojecteurService.list().subscribe(result => {
      this.videoprojecteurs = result;
    });
  }

  delete(id: number) {
    this.salleService.delete(id).subscribe(result => {
        this.list();
      }
    );

  }

  list() {
    this.salleService.list().subscribe(data => {
      this.salles = data;
    }, error => {
      console.log(error);
    });
  }

}
