import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    public registrationForm = this.formBuilder.group({
        firstNameControl: ['', [
            Validators.required,
            Validators.minLength
        ]],
        lastNameControl: ['', [
            Validators.required,
            Validators.minLength
        ]],
        userNameControl: ['', [
            Validators.required,
            Validators.minLength
        ]],
        emailControl: ['', [
            Validators.required,
            Validators.email
        ]],
        cityControl: ['', [
            Validators.required,
            Validators.minLength
        ]],
        countryControl: ['', [
            Validators.required,
            Validators.minLength
        ]],
        dateOfBirthControl: ['', [
            Validators.required
        ]],
        genderControl: ['', [
            Validators.required
        ]],
        passwordControl: ['', [
            Validators.required,
            Validators.minLength
        ]],
        rolesControl: ['', [
            Validators.required
        ]]
    });

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }

    public submitRegistration() {
    }

}
