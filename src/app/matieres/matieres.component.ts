import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Matiere} from '../model/matiere';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

  private matiere: Matiere = new Matiere();
  private pseudoCtrl: FormControl;
  private mdpCtrl: FormControl;
  private monForm: FormGroup;

  private headers: HttpHeaders;
  private httpOptions: any;

  private message = 'pseudo et/ou mot de passe incorrect(s)';


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.error) {
        this.message = 'il faut vous connecter pour aller sur cette page';
      }});
  }

  send() {}
}
