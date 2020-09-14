import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/pages/login/login.component';
import { LogoutComponent } from './authentication/pages/logout/logout.component';
import { RegistrationComponent } from './authentication/pages/registration/registration.component';
import { UserProfileComponent } from './authentication/pages/user-profile/user-profile.component';

const authenticationRoutes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'profile', component: UserProfileComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(authenticationRoutes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
