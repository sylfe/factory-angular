import { Component, OnInit } from '@angular/core';
import {Module} from '../model/module';
import {FormGroup} from '@angular/forms';
import {Matiere} from '../model/matiere';
import {ModulesService} from '../modules.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatieresService} from '../matieres.service';

@Component({
  selector: 'app-modules-edit',
  templateUrl: './modules-edit.component.html',
  styleUrls: ['./modules-edit.component.css']
})
export class ModulesEditComponent implements OnInit {

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
