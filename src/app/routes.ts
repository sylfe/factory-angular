import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MatieresComponent} from './matieres/matieres.component';
import {OrdinateursComponent} from './ordinateurs/ordinateurs.component';
import {VideoProjecteursComponent} from './video-projecteurs/video-projecteurs.component';
import {SalleComponent} from './salle/salle.component';
import {MaterielEditComponent} from './materiel-edit/materiel-edit.component';
import {OrdinateurEditComponent} from './ordinateur-edit/ordinateur-edit.component';
import {SalleEditComponent} from './salle-edit/salle-edit.component';
import {VideoProjecteurEditComponent} from './videoprojecteur-edit/videoprojecteur-edit.component';
import {FormateurComponent} from './formateur/formateur.component';


export const routes: Routes = [{path: 'login', component: LoginComponent},
  {path : 'login/:error', component: LoginComponent},
  { path : 'matiere/edit', component: MatieresComponent},
  { path : 'ordinateurs', component: OrdinateursComponent},
  { path : 'ordinateurs/edit', component: OrdinateurEditComponent},
  { path : 'salles', component: SalleComponent},
  { path : 'salles/edit', component: SalleEditComponent},
  { path : 'videoprojecteurs', component: VideoProjecteursComponent},
  { path : 'videoprojecteurs/edit', component: VideoProjecteurEditComponent},
  { path : 'materiel/edit', component: MaterielEditComponent},
  { path : 'formateur', component: FormateurComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];
