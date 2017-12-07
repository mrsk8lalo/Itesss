import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RoutesModule} from './Routes/routes/routes.module';
import {UserComponent } from './user/user.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { HistoryComponent } from './history/history.component';
import { ReinscriptionComponent } from './reinscription/reinscription.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ServicesComponent,
    ProfileComponent,
    ActualizarComponent,
    HistoryComponent,
    ReinscriptionComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
