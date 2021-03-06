import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MatieresComponent} from './matieres/matieres.component';
import {OrdinateursComponent} from './ordinateurs/ordinateurs.component';
import {VideoProjecteursComponent} from './video-projecteurs/video-projecteurs.component';
import {SalleComponent} from './salle/salle.component';
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
import {TechnicienComponent} from './technicien/technicien.component';
import {TechnicienEditComponent} from './technicien-edit/technicien-edit.component';
import {GestionnaireComponent} from './gestionnaire/gestionnaire.component';
import {GestionnaireEditComponent} from './gestionnaire-edit/gestionnaire-edit.component';
import {StagiaireComponent} from './stagiaire/stagiaire.component';
import {StagiaireEditComponent} from './stagiaire-edit/stagiaire-edit.component';
import {AdministrateurComponent} from './administrateur/administrateur.component';
import {AdministrateurEditComponent} from './administrateur-edit/administrateur-edit.component';
import {OrdinateurDispoComponent} from './ordinateur-dispo/ordinateur-dispo.component';
import {PlanningVueComponent} from './planning-vue/planning-vue.component';



export const routes: Routes = [{path: 'home', component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  { path : 'matieres', component: MatieresComponent, canActivate: [AccessFormateurService]},
  { path : 'matiere/:action/:nom', component: MatieresComponent, canActivate: [AccessFormateurService]},
  { path : 'matiere/edit', component: MatiereEditComponent, canActivate: [AccessFormateurService]},
  { path : 'matiere/:id', component: MatiereEditComponent, canActivate: [AccessFormateurService]},

  { path : 'ordinateurs', component: OrdinateursComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'ordinateur/:action/:nom', component: OrdinateursComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'ordinateur/edit', component: OrdinateurEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'ordinateur/:id', component: OrdinateurEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},

  { path : 'salles', component: SalleComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'salle/:action/:nom', component: SalleComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'salle/edit', component: SalleEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'salle/:id', component: SalleEditComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},

  { path : 'videoprojecteurs', component: VideoProjecteursComponent, canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'videoprojecteur/:action/:nom', component: VideoProjecteursComponent,
    canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'videoprojecteur/edit', component: VideoProjecteurEditComponent,
    canActivate: [AccessTechnicienService, AccessGestionnaireService]},
  { path : 'videoprojecteur/:id', component: VideoProjecteurEditComponent,
    canActivate: [AccessTechnicienService, AccessGestionnaireService]},

  { path : 'user', component: UserEditerComponent},
  { path : 'users', component: UserComponent},
  { path : 'user/:action/:nom', component: UserComponent},

  { path : 'gestionnaires', component: GestionnaireComponent},
  { path : 'gestionnaire/:action/:nom', component: GestionnaireComponent},
  { path : 'gestionnaire/edit', component: GestionnaireEditComponent},
  { path : 'gestionnaire/:id', component: GestionnaireEditComponent},

  { path : 'formateurs', component: FormateurComponent},
  { path : 'formateur/:action/:nom', component: FormateurComponent},
  { path : 'formateur/:id', component: FormateurEditComponent},
  { path : 'formateur/edit', component: FormateurEditComponent},

  { path : 'modules',  component: ModulesComponent},
  { path : 'module',  component: ModulesComponent},
  { path : 'module/edit', component: ModulesEditComponent},

  { path : 'formations', component: FormationComponent},
  { path : 'formation/create', component: FormationCreateComponent},
  { path : 'formation/create/:id', component: FormationCreateComponent},
  { path : 'formation/edit/:id', component: FormationEditComponent},

  { path : 'stagiaires', component: StagiaireComponent},
  { path : 'stagiaire/:action/:nom', component: StagiaireComponent},
  { path : 'stagiaire/:id', component: StagiaireEditComponent},
  { path : 'stagiaire/edit', component: StagiaireEditComponent},

  { path : 'techniciens', component: TechnicienComponent},
  { path : 'technicien/:action/:nom', component: TechnicienComponent},
  { path : 'technicien/edit', component: TechnicienEditComponent},
  { path : 'technicien/:id', component: TechnicienEditComponent},

  { path : 'administrateurs', component: AdministrateurComponent},
  { path : 'administrateur/:action/:nom', component: AdministrateurComponent},
  { path : 'administrateur/edit', component: AdministrateurEditComponent},
  { path : 'administrateur/:id', component: AdministrateurEditComponent},

  { path : 'planning/:id', component: PlanningVueComponent},

  { path : 'test', component: OrdinateurDispoComponent},
  { path : 'test2', component: TestPageComponent},
  { path : 'testinit', component: TestComponentComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'}];
