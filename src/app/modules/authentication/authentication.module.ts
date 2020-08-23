import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppSharedModule } from '../../shared/modules/app-shared/app-shared.module';

@NgModule({
    declarations: [LoginComponent, LogoutComponent, RegistrationComponent, AuthenticationComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        FormsModule,
        AppSharedModule
    ]
})
export class AuthenticationModule {
}
