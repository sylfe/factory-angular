import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MatieresComponent} from './matieres/matieres.component';
import {OrdinateursComponent} from './ordinateurs/ordinateurs.component';
import {VideoProjecteursComponent} from './video-projecteurs/video-projecteurs.component';
import {SalleComponent} from './salle/salle.component';
import {MaterielEditComponent} from './materiel-edit/materiel-edit.component';


export const routes: Routes = [{path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  { path : 'matiere/edit', component: MatieresComponent},
  { path : 'ordinateurs', component: OrdinateursComponent},
  { path : 'salles', component: SalleComponent},
  { path : 'videoprojecteurs', component: VideoProjecteursComponent},
  { path : 'materiel/edit', component: MaterielEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];
