import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Formation} from "../model/formation";
import {ActivatedRoute, Router} from "@angular/router";
import {FormationService} from "../formation.service";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  private formations: Formation[];
  private monForm: FormGroup;

  private message: string = null;


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private formationService: FormationService) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.titre) {
        this.message = `La formation "${params.titre}" a été ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.formationService.delete(id).subscribe(result => {
        this.list();
      }
    );
  }

  list() {
    this.formationService.list().subscribe(data => {
      this.formations = data;
    }, error => {
      console.log(error);
    });
  }
}
