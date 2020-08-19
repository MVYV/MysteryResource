import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../../services/translate/translate.service';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

    constructor(private translateService: TranslateService) { }

    ngOnInit(): void {
        localStorage.getItem('translationLanguage')
            ? this.translateService.use(localStorage.getItem('translationLanguage'))
            : this.translateService.use('ukr');

    }

}
