import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MatieresComponent} from './matieres/matieres.component';
import {OrdinateursComponent} from './ordinateurs/ordinateurs.component';
import {VideoProjecteursComponent} from './video-projecteurs/video-projecteurs.component';
import {SalleComponent} from './salle/salle.component';
import {MaterielEditComponent} from './materiel-edit/materiel-edit.component';
import {WelcomeComponent} from "./welcome/welcome.component";
import {UserEditerComponent} from "./testRest/user-editer/user-editer.component";
import {UserComponent} from "./testRest/user/user.component";


export const routes: Routes = [{path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  { path : 'matiere/edit', component: MatieresComponent},
  { path : 'ordinateurs', component: OrdinateursComponent},
  { path : 'salles', component: SalleComponent},
  { path : 'videoprojecteurs', component: VideoProjecteursComponent},
  { path : 'materiel/edit', component: MaterielEditComponent},
  {path: 'user', component: UserEditerComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/:action/:nom', component: UserComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];
