import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { CreateInstrumentProfileComponent } from './create-profile/create-profile.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { ShowUsersListComponent } from './show-users-list/show-users-list.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserprofileComponent, canActivate: [IsLoggedInService] },
  { path: 'login', component: LoginformComponent, },
  { path: 'signup', component: SignupformComponent, },
  { path: 'create', component: CreateInstrumentProfileComponent, },
  { path: 'show-instrument-profile', component: ProfileListComponent, },
  { path: 'show-instrument-profile', component: ShowUsersListComponent, },

  { path: '**', redirectTo: '' }
];
