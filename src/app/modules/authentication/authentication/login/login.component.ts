import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '../../../../services/translate/translate.service';

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

    constructor(private formBuilder: FormBuilder, private translateService: TranslateService) { }

    ngOnInit(): void {
        localStorage.getItem('translationLanguage')
            ? this.setLanguage(localStorage.getItem('translationLanguage'))
            : this.setLanguage('ukr');
    }

    public setLanguage(lang: string): void {
        localStorage.setItem('translationLanguage', lang);
        this.translateService.use(localStorage.getItem('translationLanguage'));
    }

    public submitLogIn(): void {

    }

}
