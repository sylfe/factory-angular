import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VideoProjecteur} from '../model/videoProjecteur';
import {VideoProjecteurService} from '../video-projecteur.service';

@Component({
  selector: 'app-video-projecteurs',
  templateUrl: './video-projecteurs.component.html',
  styleUrls: ['./video-projecteurs.component.css']
})
export class VideoProjecteursComponent implements OnInit {

  private videoProjecteurs: VideoProjecteur[];
  private message: string = null;


  constructor(private videoProjecteurService: VideoProjecteurService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `Le vidéo-projecteur "${params.nom}" a été ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.videoProjecteurService.delete(id).subscribe(result => {
        this.list();
      }
    );
  }

  list() {
    this.videoProjecteurService.list().subscribe(data => {
      this.videoProjecteurs = data;
    }, error => {
      console.log(error);
    });
  }

}
