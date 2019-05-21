import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from "./user.service";
import { ModulesComponent } from './modules/modules.component';
import { MatieresComponent } from './matieres/matieres.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes";
import { UserEditerComponent } from './testRest/user-editer/user-editer.component';
import { MaterielComponent } from './materiel/materiel.component';

import { FormateurComponent } from './formateur/formateur.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { UserComponent } from './testRest/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserEditerComponent,
    MaterielComponent,
    FormateurComponent,
    UserComponent,
    ModulesComponent,
    MatieresComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule, ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
