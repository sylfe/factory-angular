import { Component, OnInit } from '@angular/core';
import {FormateurService} from '../formateur.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Formateur} from '../model/formateur';

@Component({
  selector: 'app-formateur-edit',
  templateUrl: './formateur-edit.component.html',
  styleUrls: ['./formateur-edit.component.css']
})
export class FormateurEditComponent implements OnInit {

  private formateur: Formateur = new Formateur();
  constructor(private activedRoute: ActivatedRoute,
              private formateurService: FormateurService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( params => {
      if (params.id) {
        this.formateurService.findById(params.id).subscribe( data => {
          this.formateur = data;
        });
      }
    });
  }

  save() {
    if (this.formateur.id) {
      this.formateurService.update(this.formateur).subscribe(result => {
        this.router.navigate(['/formateur', 'modifé', this.formateur.nom]);
      });
    } else {
      this.formateurService.insert(this.formateur).subscribe(result => {
        this.router.navigate(['/formateur', 'ajouté', this.formateur.nom]);
      });
    }
  }

}
