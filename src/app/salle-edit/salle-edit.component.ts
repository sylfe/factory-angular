import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SalleService} from '../salle.service';
import {Salle} from '../model/salle';
import {VideoProjecteur} from '../model/videoProjecteur';
import {VideoProjecteurService} from '../video-projecteur.service';

@Component({
  selector: 'app-salle-edit',
  templateUrl: './salle-edit.component.html',
  styleUrls: ['./salle-edit.component.css']
})
export class SalleEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private salleService: SalleService,
              private videoprojecteurService: VideoProjecteurService,
              private router: Router) {
  }

  private salle: Salle = new Salle();
  private videoprojecteur0: VideoProjecteur = new VideoProjecteur();
  private videoprojecteurs: VideoProjecteur[];
  private salleAvecVideo = false;
  private pasVideop: VideoProjecteur = new VideoProjecteur(null, null, null, null);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {

        this.salleService.findById(params.id).subscribe(data => {
          this.salle = data;

          if (this.salle.videoprojecteur) {
            this.salleAvecVideo = true;
            this.videoprojecteur0 = new VideoProjecteur(
              this.salle.videoprojecteur.id,
              this.salle.videoprojecteur.version,
              this.salle.videoprojecteur.code,
              this.salle.videoprojecteur.coutJournee
            );
          }

          console.log(this.salle);
        });
      }
    });
    this.videoprojecteurService.listLibre().subscribe(result => {
      this.videoprojecteurs = result;
    });
    this.salle.videoprojecteur = new VideoProjecteur();

  }


  save() {
    console.log(this.salle);

    if (this.salle.id) {
      this.salleService.update(this.salle).subscribe(result => {
        this.router.navigate(['/salle', 'modifiée', this.salle.code]);
      });
    } else {
      this.salleService.insert(this.salle).subscribe(result => {
        this.router.navigate(['/salle', 'ajoutée', this.salle.code]);
      });
    }
  }


  video(){
    console.log('J\'ai cliqué sur : ' + this.salleAvecVideo);
    if(this.salleAvecVideo === false){
      this.salleAvecVideo = false;
      console.log('clic sur false : ' + this.salle.videoprojecteur.id);
      this.salle.videoprojecteur.id = this.pasVideop.id;
      console.log('après clic : ' + this.salle.videoprojecteur.id);
    } else {
      this.salleAvecVideo = true;
      console.log('clic sur true : ' + this.salleAvecVideo);
    }
  }


}

