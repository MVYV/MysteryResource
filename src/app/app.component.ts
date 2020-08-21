import { Component, OnInit } from '@angular/core';
import { TranslateService } from './services/translate/translate.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'CyberWe';

    constructor(private translateService: TranslateService) {}

    ngOnInit(): void {
        this.translateService.use(localStorage.getItem('translationLanguage'));
    }
}
