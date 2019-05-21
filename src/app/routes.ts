import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {UserService} from "./user.service";


export const routes: Routes = [{path: 'login', component: LoginComponent},
  {path: 'login/:error', component: LoginComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}];
