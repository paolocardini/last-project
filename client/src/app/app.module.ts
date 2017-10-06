import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import {routes} from './routes';
import { SignupformComponent } from './signupform/signupform.component';
import { AgmCoreModule } from '@agm/core';
import { CreateInstrumentProfileComponent } from './create-profile/create-profile.component';
import {InstrumentService} from './services/instrument.service';
import { ProfileListComponent } from './profile-list/profile-list.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomeComponent,
    UserprofileComponent,
    SignupformComponent,
    CreateInstrumentProfileComponent,
    ProfileListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPLpdo62Gii7eEBdUk8qXmA2x6YVN0bNI'
    })
  ],
  providers: [AuthService, IsLoggedInService,InstrumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
