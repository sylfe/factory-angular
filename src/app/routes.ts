import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MatieresComponent} from './matieres/matieres.component';
import {OrdinateursComponent} from './ordinateurs/ordinateurs.component';
import {VideoProjecteursComponent} from './video-projecteurs/video-projecteurs.component';
import {SalleComponent} from './salle/salle.component';
import {MaterielEditComponent} from './materiel-edit/materiel-edit.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {UserEditerComponent} from './testRest/user-editer/user-editer.component';
import {UserComponent} from './testRest/user/user.component';
import {OrdinateurEditComponent} from './ordinateur-edit/ordinateur-edit.component';
import {SalleEditComponent} from './salle-edit/salle-edit.component';
import {VideoProjecteurEditComponent} from './videoprojecteur-edit/videoprojecteur-edit.component';
import {FormateurComponent} from './formateur/formateur.component';
import {MatiereEditComponent} from './matiere-edit/matiere-edit.component';


export const routes: Routes = [{path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  { path : 'matieres', component: MatieresComponent},
  { path : 'matiere/edit', component: MatiereEditComponent},
  { path : 'ordinateurs', component: OrdinateursComponent},
  { path : 'ordinateurs/:action/:nom', component: OrdinateursComponent},
  { path : 'ordinateurs/edit', component: OrdinateurEditComponent},
  { path : 'ordinateurs/:id', component: OrdinateurEditComponent},
  { path : 'salles', component: SalleComponent},
  { path : 'salles/:action/:nom', component: SalleComponent},
  { path : 'salles/edit', component: SalleEditComponent},
  { path : 'salles/:id', component: SalleEditComponent},
  { path : 'videoprojecteurs', component: VideoProjecteursComponent},
  { path : 'videoprojecteurs/:action/:nom', component: VideoProjecteursComponent},
  { path : 'videoprojecteurs/edit', component: VideoProjecteurEditComponent},
  { path : 'videoprojecteurs/:id', component: VideoProjecteurEditComponent},
  { path : 'materiel/edit', component: MaterielEditComponent},
  {path: 'user', component: UserEditerComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/:action/:nom', component: UserComponent},
  { path : 'formateur', component: FormateurComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];
