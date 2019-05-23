import { Component, OnInit } from '@angular/core';
import {FormationService} from '../formation.service';
import {Formation} from '../model/formation';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  private date: Date = new Date();
  private today: number = Date.now();
  private monthStart: Date;
  private monthEnd: Date;

  private days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  private days30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  private months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  private dayWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  private month30 = [3, 5, 8, 10];
  private month31 = [0, 2, 4, 6, 7, 9, 11];
  private monthFormation = [];
  private formation: Formation;
  constructor( private formationService: FormationService) { }

  ngOnInit() {
    this.date.setMonth(4);
    this.monthStart.setMonth(1);
    this.monthStart.setDate(1);
    this.formationService.findById(1).subscribe( rez => {
      this.formation = rez;
      console.log(rez);
      this.monthStart = this.formation.dateDebut;
      this.monthEnd = this.formation.dateFin;
    })
    let monthNow = this.monthStart.getMonth();
    while (monthNow <= this.monthEnd.getMonth()){

      this.monthFormation.push(monthNow);
      monthNow ++;
    }
    console.log('months'+this.monthFormation);
  }

  tempDate(day, month){
    let d = new Date();
    d.setDate(day);

    return d;
  }

}
