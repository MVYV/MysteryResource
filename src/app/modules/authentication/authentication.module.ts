import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentication/pages/login/login.component';
import { LogoutComponent } from './authentication/pages/logout/logout.component';
import { RegistrationComponent } from './authentication/pages/registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppSharedModule } from '../../shared/modules/app-shared/app-shared.module';
import { UserProfileComponent } from './authentication/pages/user-profile/user-profile.component';

@NgModule({
    declarations: [LoginComponent, LogoutComponent, RegistrationComponent, AuthenticationComponent, UserProfileComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        AppSharedModule
    ]
})
export class AuthenticationModule {
}
