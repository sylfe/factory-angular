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
import {FormateurEditComponent} from './formateur-edit/formateur-edit.component';
import {MatiereEditComponent} from './matiere-edit/matiere-edit.component';
import {TestPageComponent} from './test-page/test-page.component';
import {AccessAdminService} from './access-admin.service';
import {TestComponentComponent} from './test-component/test-component.component';


export const routes: Routes = [{path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  { path : 'matieres', component: MatieresComponent},
  { path : 'matiere/edit', component: MatiereEditComponent},
  { path : 'matiere/edit/:id', component: MatiereEditComponent},
  { path : 'ordinateurs', component: OrdinateursComponent},
  { path : 'ordinateur/:action/:nom', component: OrdinateursComponent},
  { path : 'ordinateur/edit', component: OrdinateurEditComponent},
  { path : 'ordinateur/:id', component: OrdinateurEditComponent},
  { path : 'salles', component: SalleComponent},
  { path : 'salle/:action/:nom', component: SalleComponent},
  { path : 'salle/edit', component: SalleEditComponent},
  { path : 'salle/:id', component: SalleEditComponent},
  { path : 'videoprojecteurs', component: VideoProjecteursComponent},
  { path : 'videoprojecteur/:action/:nom', component: VideoProjecteursComponent},
  { path : 'videoprojecteur/edit', component: VideoProjecteurEditComponent},
  { path : 'videoprojecteur/:id', component: VideoProjecteurEditComponent},
  { path : 'materiel/edit', component: MaterielEditComponent},
  { path : 'user', component: UserEditerComponent},
  { path : 'users', component: UserComponent},
  { path : 'user/:action/:nom', component: UserComponent},
  { path : 'formateurs', component: FormateurComponent},
  { path : 'formateur/:id', component: FormateurEditComponent},
  { path : 'formateur/edit', component: FormateurEditComponent},
  { path : 'test', component: TestPageComponent, canActivate: [AccessAdminService]},
  { path : 'testinit', component: TestComponentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}];
