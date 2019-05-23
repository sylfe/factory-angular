import {Component, OnInit} from '@angular/core';
import {Administrateur} from '../model/administrateur';
import {ActivatedRoute} from '@angular/router';
import {AdministrateurService} from '../administrateur.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  private administrateurs: Administrateur[];
  private message: string = null;

  constructor(private administrateurService: AdministrateurService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `administrateur ${params.nom} ${params.action}`;
      }
    });
    this.list();
  }

  list() {
    this.administrateurService.list().subscribe(data => {
      this.administrateurs = data;
      console.log('ok');
    }, error => {
      console.log(error);
    });
  }


  delete(id: number) {
    this.administrateurService.delete(id).subscribe(result => this.list());
  }


}
