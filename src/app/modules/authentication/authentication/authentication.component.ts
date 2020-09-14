import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../services/translate/translate.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

    constructor(private translateService: TranslateService) { }

    ngOnInit(): void {
        this.translateService.use(localStorage.getItem('translationLanguage')).then();
    }

}
