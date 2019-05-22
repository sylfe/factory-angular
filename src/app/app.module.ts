import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UserService} from './user.service';
import { ModulesComponent } from './modules/modules.component';
import { MatieresComponent } from './matieres/matieres.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './routes';
import { UserEditerComponent } from './testRest/user-editer/user-editer.component';
import { FormateurComponent } from './formateur/formateur.component';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { MaterielEditComponent } from './materiel-edit/materiel-edit.component';
import { SalleComponent } from './salle/salle.component';
import { VideoProjecteursComponent } from './video-projecteurs/video-projecteurs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './testRest/user/user.component';
import {MatieresService} from './matieres.service';
import {ModulesService} from './modules.service';
import { OrdinateurEditComponent } from './ordinateur-edit/ordinateur-edit.component';
import { VideoProjecteurEditComponent } from './videoprojecteur-edit/videoprojecteur-edit.component';
import { SalleEditComponent } from './salle-edit/salle-edit.component';
import { MatiereEditComponent } from './matiere-edit/matiere-edit.component';
import { FormationCreateComponent } from './formation-create/formation-create.component';
import { FormationEditComponent } from './formation-edit/formation-edit.component';
import {FormateurEditComponent} from './formateur-edit/formateur-edit.component';
import { TestPageComponent } from './test-page/test-page.component';
import { TestComponentComponent } from './test-component/test-component.component';
import {AccessAdminService} from './access-admin.service';
import {AccessFormateurService} from './access-formateur.service';
import {AccessGestionnaireService} from './access-gestionnaire.service';
import {AccessTechnicienService} from './access-technicien.service';
import { ModulesEditComponent } from './modules-edit/modules-edit.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { TechnicienEditComponent } from './technicien/technicien-edit/technicien-edit.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { GestionnaireEditComponent } from './gestionnaire-edit/gestionnaire-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserEditerComponent,
    SalleComponent,
    MaterielEditComponent,
    OrdinateursComponent,
    VideoProjecteursComponent,
    FormateurComponent,
    UserComponent,
    ModulesComponent,
    MatieresComponent,
    LoginComponent,
    WelcomeComponent,
    OrdinateurEditComponent,
    VideoProjecteurEditComponent,
    SalleEditComponent,
    MatiereEditComponent,
    FormationCreateComponent,
    FormationEditComponent,
    FormateurEditComponent,
    TestPageComponent,
    TestComponentComponent,
    ModulesEditComponent,
    TechnicienComponent,
    TechnicienEditComponent,
    GestionnaireComponent,
    GestionnaireEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [UserService, MatieresService, ModulesService, AccessAdminService,
    AccessFormateurService, AccessGestionnaireService, AccessTechnicienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
