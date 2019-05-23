import {Component, OnInit} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Matiere} from '../model/matiere';
import {MatieresService} from '../matieres.service';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-matiere-edit',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.css']
})
export class MatiereEditComponent implements OnInit {

  private matiere: Matiere = new Matiere();
  private monForm: FormGroup;


  private message = 'pseudo et/ou mot de passe incorrect(s)';


  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, private matiereService: MatieresService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.error) {
        this.message = 'il faut vous connecter pour aller sur cette page';
      };


      if (params.id) {
        this.matiereService.findById(params.id).subscribe(data => {
          this.matiere = data;
        });
      }


    });
  }

  //send() {
  // this.matiereService.insert(this.matiere).subscribe( data => {
  //   this.router.navigate(['/matieres']);
  //  }, error => {console.log(error);
  // }
  //   );
  //}

  send() {
    if (this.matiere.id) {
      this.matiereService.update(this.matiere).subscribe(result => {
          this.router.navigate(['/matiere', 'modifié', this.matiere.nom]);
        }, error => {
          console.log(error);
        }
      );
    } else {
      console.log('ok');
      this.matiereService.insert(this.matiere).subscribe(result => {
          this.router.navigate(['/matiere', 'ajouté', this.matiere.nom]);
        }, error => {
          console.log(error);
        }
      );
    }
  }

}
