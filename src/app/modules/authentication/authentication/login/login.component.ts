import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public logInForm = this.formBuilder.group({
        emailControl: ['', [
            Validators.required,
            Validators.email
        ]],
        passwordControl: ['', [
            Validators.required,
            Validators.minLength
        ]]
    });

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }

    public submitLogIn(): void {

    }

}
