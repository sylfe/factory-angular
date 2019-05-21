import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SalleService} from '../salle.service';
import {Salle} from '../model/salle';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  private salles: Salle[];
  private message: string = null;


  constructor(private salleService: SalleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.nom) {
        this.message = `La salle "${params.nom}" a été ${params.action}`;
      }
    });
    this.list();
  }

  delete(id: number) {
    this.salleService.delete(id).subscribe(result => {
        this.list();
      }
    );
  }

  list() {
    this.salleService.list().subscribe(data => {
      this.salles = data;
    }, error => {
      console.log(error);
    });
  }

}
