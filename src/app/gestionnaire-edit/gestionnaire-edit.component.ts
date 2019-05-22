import {Component, OnInit} from '@angular/core';
import {Gestionnaire} from '../model/gestionnaire';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {GestionnaireService} from '../gestionnaire.service';

@Component({
  selector: 'app-gestionnaire-edit',
  templateUrl: './gestionnaire-edit.component.html',
  styleUrls: ['./gestionnaire-edit.component.css']
})
export class GestionnaireEditComponent implements OnInit {

  private gestionnaire: Gestionnaire = new Gestionnaire();

  constructor(private activatedRoute: ActivatedRoute, private gestionnaireService: GestionnaireService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        if (params.id) {
          this.gestionnaireService.findById(params.id).subscribe(data => {
            this.gestionnaire = data;
          });
        }
      }
    );
  }

  save() {
    if (this.gestionnaire.id) {
      this.gestionnaireService.update(this.gestionnaire).subscribe(result => {
        this.router.navigate(['/gestionnaires', 'modifié', this.gestionnaire.email]);
      });
    } else {
      this.gestionnaireService.insert(this.gestionnaire).subscribe(result => {
        this.router.navigate(['/gestionnaires', 'ajouté', this.gestionnaire.email]);
      });
    }
  }


}
