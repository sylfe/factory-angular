import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MaterielService} from '../materiel.service';
import {Materiel} from '../model/materiel';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  private materiel: Materiel[];
  private message: string = null;

  constructor(private materielService: MaterielService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `Le Matériel "${params.nom}" a été ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.materielService.delete(id).subscribe(result => {
        this.list();
      }
    );
  }

  list() {
    this.materielService.list().subscribe(data => {
      this.materiel = data;
    }, error => {
      console.log(error);
    });
  }

}
