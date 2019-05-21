import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {UserService} from "./user.service";
import {MatieresComponent} from './matieres/matieres.component';
import {ModulesComponent} from './modules/modules.component';


export const routes: Routes = [{path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  { path : 'matiere/edit', component: MatieresComponent},
  { path: 'module/edit', component: ModulesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];
