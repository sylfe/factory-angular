import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Matiere} from '../model/matiere';
import {MatieresService} from '../matieres.service';


@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

  private matieres: Matiere[];
  private monForm: FormGroup;

  private message: string = null;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private matiereService: MatieresService) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `La matière "${params.nom}" a été ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.matiereService.delete(id).subscribe(result => {
        this.list();
      }
    );
  }

  list() {
    this.matiereService.list().subscribe(data => {
      this.matieres = data;
    }, error => {
      console.log(error);
    });
  }
}
