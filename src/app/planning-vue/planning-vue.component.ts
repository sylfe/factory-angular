import { Component, OnInit } from '@angular/core';
import {FormationService} from '../formation.service';
import {Formation} from '../model/formation';
import {ModulesService} from '../modules.service';
import {Module} from '../model/module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-planning-vue',
  templateUrl: './planning-vue.component.html',
  styleUrls: ['./planning-vue.component.css']
})
export class PlanningVueComponent implements OnInit {



  private date: Date = new Date();
  private today: number = Date.now();
  private monthStart: Date = new Date();
  private monthEnd: Date = new Date();

  private days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  private days30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  private months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
  private dayWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  private month30 = [3, 5, 8, 10];
  private month31 = [0, 2, 4, 6, 7, 9, 11];
  private monthFormation = [];
  private formation: Formation;
  private modules: Module[] = []
  constructor( private formationService: FormationService, private moduleService: ModulesService,
               private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe( params => {
      if(params.id){
        this.formationService.findByIdModules(params.id).subscribe( rez => {
          this.formation = rez;
          console.log(rez);
          for (let module of this.formation.modules){
            this.moduleService.findByIdMatiere(module.id).subscribe( rez => {
              this.modules.push(rez);
            })
          }
          this.monthStart = new Date(this.formation.dateDebut);
          console.log(this.monthStart);
          this.monthEnd = new Date(this.formation.dateFin);
          let monthNow = this.monthStart.getMonth();
          while (monthNow <= this.monthEnd.getMonth()) {

            this.monthFormation.push(monthNow);
            monthNow ++;
          }
          console.log('months' + this.monthFormation);
          console.log(this.formation.modules[0]);
        })
      }
    })


  }

  tempDate(day, month){
    let d = new Date();
    d.setMonth(month);
    d.setDate(day);
    return d;
  }

  monthTest(month) {
    if (this.month31.indexOf(month) > -1){
      return true;
    }
    return false;
  }



}
