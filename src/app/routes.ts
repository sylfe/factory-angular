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
import {AccessFormateurService} from './access-formateur.service';
import {AccessTechnicienService} from './access-technicien.service';
import {AccessGestionnaireService} from './access-gestionnaire.service';
import {ModulesComponent} from './modules/modules.component';
import {ModulesEditComponent} from './modules-edit/modules-edit.component';
import {FormationCreateComponent} from './formation-create/formation-create.component';
import {FormationEditComponent} from './formation-edit/formation-edit.component';
import {FormationComponent} from './formation/formation.component';
import {GestionnaireComponent} from './gestionnaire/gestionnaire.component';
import {GestionnaireEditComponent} from './gestionnaire-edit/gestionnaire-edit.component';



export const routes: Routes = [{path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  { path : 'matieres', component: MatieresComponent, canActivate: [AccessFormateurService]},
  { path : 'matieres/:action/:nom', component: MatieresComponent, canActivate: [AccessFormateurService]},
  { path : 'matiere/edit', component: MatiereEditComponent, canActivate: [AccessFormateurService]},
  { path : 'matiere/edit/:id', component: MatiereEditComponent, canActivate: [AccessFormateurService]},
  { path : 'ordinateurs', component: OrdinateursComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'ordinateurs/:action/:nom', component: OrdinateursComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'ordinateur/edit', component: OrdinateurEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'ordinateur/:id', component: OrdinateurEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'salles', component: SalleComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'salles/:action/:nom', component: SalleComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'salle/edit', component: SalleEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'salle/:id', component: SalleEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'videoprojecteurs', component: VideoProjecteursComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'videoprojecteurs/:action/:nom', component: VideoProjecteursComponent,
    canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'videoprojecteur/edit', component: VideoProjecteurEditComponent,
    canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'videoprojecteur/:id', component: VideoProjecteurEditComponent,
    canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'user', component: UserEditerComponent},
  { path : 'users', component: UserComponent},
  { path : 'user/:action/:nom', component: UserComponent},
  { path : 'gestionnaires', component: GestionnaireComponent},
  { path : 'gestionnaires/:action/:nom', component: GestionnaireComponent},
  { path : 'gestionnaire/edit', component: GestionnaireEditComponent},
  { path : 'gestionnaire/edit/:id', component: GestionnaireEditComponent},
  { path : 'formateurs', component: FormateurComponent},
  { path : 'formateurs/:action/:nom', component: FormateurComponent},
  { path : 'formateur/edit/:id', component: FormateurEditComponent},
  { path : 'formateur/edit', component: FormateurEditComponent},
  { path : 'modules',  component: ModulesComponent},
  { path : 'module',  component: ModulesComponent},
  { path : 'module/edit', component: ModulesEditComponent},
  { path : 'formations', component: FormationComponent},
  { path : 'formation/:action/:titre', component: FormationEditComponent},
  { path : 'formation/create', component: FormationCreateComponent},
  { path : 'formation/edit', component: FormationEditComponent},
  { path : 'test', component: TestPageComponent, canActivate: [AccessAdminService]},
  { path : 'testinit', component: TestComponentComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}];
