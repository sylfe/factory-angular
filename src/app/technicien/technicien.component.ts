import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TechnicienService} from '../technicien.service';
import {Technicien} from '../model/technicien';

@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {

  private technicien: Technicien[];
  private message: string = null;

  constructor(private technicienService: TechnicienService, private activatedRoute: ActivatedRoute) { }


  list() {
    this.technicienService.list().subscribe(data => {
      this.technicien = data;
      console.log('ok');
    }, error => {
      console.log(error);
    });
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `technicien ${params.nom} ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.technicienService.delete(id).subscribe(result => this.list());
  }



}
