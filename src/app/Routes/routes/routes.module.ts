import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from "../../login/login.component";
import { UserComponent } from "../../user/user.component";
import { ServicesComponent} from "../../services/services.component";
import { ProfileComponent} from "../../profile/profile.component";
import { ActualizarComponent} from "../../actualizar/actualizar.component";
import { HistoryComponent} from "../../history/history.component";
import { ReinscriptionComponent} from "../../reinscription/reinscription.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent},
  { path: 'servicios', component: ServicesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'actualizar', component: ActualizarComponent},
  { path: 'history', component: HistoryComponent},
  { path: 're-ins', component: ReinscriptionComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
