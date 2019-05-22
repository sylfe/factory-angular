import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Module} from '../model/module';
import {Matiere} from '../model/matiere';
import {MatieresService} from '../matieres.service';
import {ModulesService} from '../modules.service';
import {Ordinateur} from '../model/ordinateur';
import {OrdinateurService} from '../ordinateur.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {


  private modules: Module[];
  private message: string = null;


  constructor(private moduleService: ModulesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `L'ordinateur "${params.nom}" a été ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.moduleService.delete(id).subscribe(result => {
        this.list();
      }
    );
  }

  list() {
    this.moduleService.list().subscribe(data => {
      this.modules = data;
    }, error => {
      console.log(error);
    });
  }
}
