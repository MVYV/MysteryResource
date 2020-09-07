import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../../services/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    private loginSubscription: Subscription;
    public logInForm = this.formBuilder.group({
        email: ['', [
            Validators.required,
            Validators.email
        ]],
        password: ['', [
            Validators.required,
            Validators.minLength
        ]]
    });

    constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }

    public submitLogIn(): void {
        this.loginSubscription = this.authenticationService.logIn(this.logInForm.value).subscribe(
            (responseData: any) => {
                this.router.navigate(['home']).then();
            },
            error => {}
        );
    }

}
