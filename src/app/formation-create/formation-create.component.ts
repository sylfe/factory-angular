import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/formation';
import {ActivatedRoute, Router} from '@angular/router';
import {FormationService} from '../formation.service';
import {SalleService} from '../salle.service';
import {Salle} from '../model/salle';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;
import {VideoProjecteur} from "../model/videoProjecteur";


@Component({
  selector: 'app-formation-create',
  templateUrl: './formation-create.component.html',
  styleUrls: ['./formation-create.component.css']
})
export class FormationCreateComponent implements OnInit {
  private formation: Formation = new Formation();
private salles: Salle[];
private verif: boolean;
 constructor(private activatedRoute: ActivatedRoute, private formationService: FormationService,  private salleService: SalleService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.formationService.findById(params.id).subscribe(data => {
          this.formation = data;
        });
      }
    });
    this.salleService.list().subscribe(result => {
      this.salles = result;
    });
    this.listSalle();
  }


  save() {
    if (this.formation.id) {
      this.formationService.update(this.formation).subscribe(result => {
        this.router.navigate(['/formation', 'edit', this.formation.id]);
      });
    } else {
      this.formationService.insert(this.formation).subscribe(result => {
        console.log(result.headers);
        console.log(result);
       //this.router.navigate(['/formation/edit', this.formation.id]);
        this.router.navigate(['/formations']);
      });

    }
  }
  checkDate() {
    if (this.formation.dateDebut > this.formation.dateFin) {
     this.verif = true;
     return this.verif;
    } else {
      this.verif = false;
      return this.verif;
    }
  }

  listSalle() {
    this.salleService.list().subscribe( result => {
      this.salles = result;
      console.log(this.salles);
    }, error => {
      console.log('error');
    });
  }

}
