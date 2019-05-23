import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Formation} from '../model/formation';
import {FormationService} from '../formation.service';
import {Matiere} from '../model/matiere';
import {MatieresService} from '../matieres.service';
import {Formateur} from '../model/formateur';
import {FormateurService} from '../formateur.service';
import {Module} from '../model/module';
import {ModulesService} from '../modules.service';

@Component({
  selector: 'app-formation-edit',
  templateUrl: './formation-edit.component.html',
  styleUrls: ['./formation-edit.component.css']
})
export class FormationEditComponent implements OnInit {

  private matieres: Matiere[];
  private formateurs: Formateur[];
  private modules: Module[];

  //Le module qu'on est entrain de créer:
  private module: Module = new Module();

  private formation: Formation = new Formation();

  constructor(private activedRoute: ActivatedRoute,
              private formationService: FormationService,
              private matiereService: MatieresService,
              private formateurService: FormateurService,
              private moduleService: ModulesService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.params.subscribe( params => {
      if (params.id) {
        this.formationService.findById(params.id).subscribe( data => {
          console.log('data' + data);
          console.log(data.id)
          console.log('tryfind');
          this.formation = data;
          //console.log(this.formation);
          this.module.formation = this.formation;
         // console.log('blabla' + this.module.formation.id);
        });
      }
    });
    this.listMatiere();
    this.listFormateur();
    this.listModule();
    console.log('la formation choisie: ' + this.formation.id);
  }

  save() {
    if (this.formation.id) {
      this.formationService.update(this.formation).subscribe(result => {
        this.router.navigate(['/formation', 'modifié', this.formation.titre]);
      });
    } else {
      console.log('ok');
      this.formationService.insert(this.formation).subscribe( result => {
        this.router.navigate(['/formation', 'ajouté', this.formation.titre]);
      });
    }
  }

  //Supprimer un module dans la formation qu'on édite:
  delete(id: number) {
    this.moduleService.delete(id).subscribe(result => {
        this.listModule();
      }
    );
  }

  //Quand on clique sur ajouter le module, le module est créé en base avec les bons attributs et on recharge la liste:
  add() {
    //this.module.formation = this.formation;
    this.send();
  }

  send() {
      console.log('Voici le module sauvé dans la base: ');
      console.log(this.module);
      console.log('Son formateur: ' + this.module.formateur.nom);
      console.log('Sa matière: ' + this.module.matiere.nom);
      this.moduleService.insert(this.module).subscribe(result => {
        this.listModule();
        }, error => {
          console.log(error);
        }
      );
    }

  listMatiere() {
    this.matiereService.list().subscribe( data => {
      this.matieres = data;
      console.log(this.matieres);
    }, error => {
      console.log('error');
    });
  }

  listFormateur() {
    this.formateurService.list().subscribe( data => {
      this.formateurs = data;
      console.log(this.formateurs);
    }, error => {
      console.log('error');
    });
  }

  listModule() {
    this.moduleService.list().subscribe( data => {
      this.modules = data;
      console.log(this.modules);
    }, error => {
      console.log('error');
    });
  }

  goPDF() {
    this.router.navigate(['/formation', 'ajouté', this.formation.titre]);
  }
}
