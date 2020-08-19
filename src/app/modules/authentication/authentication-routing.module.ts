import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { RegistrationComponent } from './authentication/registration/registration.component';

const authenticationRoutes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'registration', component: RegistrationComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(authenticationRoutes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
