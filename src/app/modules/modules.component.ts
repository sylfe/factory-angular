import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Module} from '../model/module';
import {Matiere} from '../model/matiere';
import {MatieresService} from '../matieres.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {


  private module: Module;
  private monForm: FormGroup;
  private matieres: Matiere[];



  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private matiereService: MatieresService) {
  //  this.matiereService.list().subscribe(rez => this.matieres = rez);
    this.matieres.push(new Matiere('nom', 'niveau',
      'objectifs', 'prerequis', 'contenu', 10));
  }




  ngOnInit(): void {
  }

  send() {}
}
