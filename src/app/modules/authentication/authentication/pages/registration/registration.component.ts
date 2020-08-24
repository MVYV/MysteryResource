import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
    MAT_MOMENT_DATE_FORMATS,
    MomentDateAdapter,
    MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'uk-UK' },
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ],
})
export class RegistrationComponent implements OnInit {

    public registrationForm = this.formBuilder.group({
        userNameControl: ['', [
            Validators.required,
            Validators.minLength
        ]],
        emailControl: ['', [
            Validators.required,
            Validators.email
        ]],
        dateOfBirthControl: ['', [
            Validators.required
        ]],
        passwordControl: ['', [
            Validators.required,
            Validators.minLength
        ]]
    });

    constructor(private formBuilder: FormBuilder, private adapterForDate: DateAdapter<any>) { }

    ngOnInit(): void {
    }

    public submitRegistration() {
    }

}