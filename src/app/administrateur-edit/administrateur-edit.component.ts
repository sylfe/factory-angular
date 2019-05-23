import {Component, OnInit} from '@angular/core';
import {Administrateur} from '../model/administrateur';
import {ActivatedRoute, Router} from '@angular/router';
import {AdministrateurService} from '../administrateur.service';

@Component({
  selector: 'app-administrateur-edit',
  templateUrl: './administrateur-edit.component.html',
  styleUrls: ['./administrateur-edit.component.css']
})
export class AdministrateurEditComponent implements OnInit {

  private administrateur: Administrateur = new Administrateur();

  constructor(private activatedRoute: ActivatedRoute, private administrateurService: AdministrateurService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        if (params.id) {
          this.administrateurService.findById(params.id).subscribe(data => {
            this.administrateur = data;
          });
        }
      }
    );
  }

  save() {
    if (this.administrateur.id) {
      this.administrateurService.update(this.administrateur).subscribe(result => {
        this.router.navigate(['/administrateur', 'modifié', this.administrateur.email]);
      });
    } else {
      this.administrateurService.insert(this.administrateur).subscribe(result => {
        this.router.navigate(['/administrateur', 'ajouté', this.administrateur.email]);
      });
    }
  }

}
