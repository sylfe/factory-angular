import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VideoProjecteurService} from '../video-projecteur.service';
import {VideoProjecteur} from '../model/videoProjecteur';

@Component({
  selector: 'app-videoprojecteur-edit',
  templateUrl: './videoprojecteur-edit.component.html',
  styleUrls: ['./videoprojecteur-edit.component.css']
})
export class VideoProjecteurEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private videoprojecteurService: VideoProjecteurService,
              private router: Router) { }

  private videoprojecteur: VideoProjecteur = new VideoProjecteur();


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {

        this.videoprojecteurService.findById(params.id).subscribe(data => {
          this.videoprojecteur = data;
        });
      }
    });
  }


  save() {

    if (this.videoprojecteur.id) {
      this.videoprojecteurService.update(this.videoprojecteur).subscribe(result => {
        this.router.navigate(['/videoprojecteur', 'modifié', this.videoprojecteur.code]);

      });
    } else {
      this.videoprojecteurService.insert(this.videoprojecteur).subscribe(result => {
        this.router.navigate(['/videoprojecteur', 'ajouté', this.videoprojecteur.code]);
      });

    }

  }
}

