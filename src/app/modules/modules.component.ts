import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Module} from '../model/module';
import {Matiere} from '../model/matiere';
import {MatieresService} from '../matieres.service';
import {ModulesService} from '../modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {


  private module: Module = new Module();
  private monForm: FormGroup;
  private matieres: Matiere[] = [];
  private moduleService: ModulesService;



  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private matiereService: MatieresService) {
  //  this.matiereService.list().subscribe(rez => this.matieres = rez);
    this.matieres.push(new Matiere(1, 'nom',
      'niveau', 'objectif', 'prerequis', 'contenu', 10, null, null));
  }




  ngOnInit(): void {
  }

  send() {
    console.log(this.module);
    this.moduleService.insert(this.module).subscribe(result => {
      console.log('ok');
    }, error => {
      console.log(error);
    });
  }
}
