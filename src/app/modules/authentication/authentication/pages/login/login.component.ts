import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login-service/login.service';
import { Subscription } from 'rxjs';

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

    constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }

    public submitLogIn(): void {
        this.loginSubscription = this.loginService.loginWithCredentials(this.logInForm.value).subscribe(
            (data) => {console.log(data)},
            error => {}
        );
    }

}
