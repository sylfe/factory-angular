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
import { FormationCreateComponent } from './formation-create/formation-create.component';
import { FormationEditComponent } from './formation-edit/formation-edit.component';


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
    FormationCreateComponent,
    FormationEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [UserService, MatieresService, ModulesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
