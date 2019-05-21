import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SalleService} from '../salle.service';
import {Salle} from '../model/salle';

@Component({
  selector: 'app-salle-edit',
  templateUrl: './salle-edit.component.html',
  styleUrls: ['./salle-edit.component.css']
})
export class SalleEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private salleService: SalleService,
              private router: Router) { }

  private salle: Salle = new Salle();


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {

        this.salleService.findById(params.id).subscribe(data => {
          this.salle = data;
        });
      }
    });
  }


  save() {

    if (this.salle.id) {
      this.salleService.update(this.salle).subscribe(result => {
        this.router.navigate(['/ordinateurs', 'modifié', this.salle.code]);

      });
    } else {
      this.salleService.insert(this.salle).subscribe(result => {
        this.router.navigate(['/ordinateurs', 'ajouté', this.salle.code]);
      });

    }

  }
}

