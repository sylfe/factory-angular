import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ordinateur} from '../model/ordinateur';
import {OrdinateurService} from '../ordinateur.service';

@Component({
  selector: 'app-ordinateur-edit',
  templateUrl: './ordinateur-edit.component.html',
  styleUrls: ['./ordinateur-edit.component.css']
})
export class OrdinateurEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private ordinateurService: OrdinateurService,
              private router: Router) { }

  private ordinateur: Ordinateur = new Ordinateur();


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {

        this.ordinateurService.findById(params.id).subscribe(data => {
          this.ordinateur = data;
        });
      }
    });
  }


  send() {

    // methode save pour ordinateur
    if (this.ordinateur.id) {
      this.ordinateurService.update(this.ordinateur).subscribe(result => {
        console.log('ok');
        this.router.navigate(['/ordinateurs', 'modifié', this.ordinateur.code]);

      });
    } else {

      this.ordinateurService.insert(this.ordinateur).subscribe(result => {
        console.log('okoo');
        this.router.navigate(['/ordinateurs', 'ajouté', this.ordinateur.code]);
      });

    }

  }
}
