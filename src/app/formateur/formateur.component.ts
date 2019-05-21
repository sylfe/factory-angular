import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Formateur} from '../model/formateur';
import {FormateurService} from "../formateur.service";

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  private formateurs: Formateur[];
  private message: string = null;

  constructor(private formateurService: FormateurService, private activatedRoute: ActivatedRoute) { }


  list() {
    this.formateurService.list().subscribe(data => {
      this.formateurs = data;
    }, error => {
      console.log(error);
    });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `formateur ${params.nom} ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.formateurService.delete(id).subscribe(result => this.list());
  }


}
