import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Packages
import { AgmCoreModule } from '@agm/core';

// My components
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ProfileListComponent } from './profile-list/profile-list.component'
import { CreateInstrumentProfileComponent } from './create-profile/create-profile.component';

// Services
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'
import { InstrumentService } from './services/instrument.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';

import { routes } from './routes';
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
  providers: [
    AuthService,
    IsLoggedInService,
    InstrumentService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
