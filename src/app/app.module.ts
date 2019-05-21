import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserService} from "./user.service";
import { ModulesComponent } from './modules/modules.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MatieresComponent } from './matieres/matieres.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    MatieresComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
