import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../../../services/translate/translate.service';

@Component({
    selector: 'app-nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

    @Output() public sideNavToggle = new EventEmitter();

    constructor(private translateService: TranslateService) { }

    ngOnInit(): void {
        localStorage.getItem('translationLanguage')
            ? this.setLanguage(localStorage.getItem('translationLanguage'))
            : this.setLanguage('ukr');
    }

    public onToggleSideNav = () => {
        this.sideNavToggle.emit();
    };

    public setLanguage(lang: string): void {
        localStorage.setItem('translationLanguage', lang);
        this.translateService.use(localStorage.getItem('translationLanguage'));
    }

    public pageReload(): void {
        window.location.reload();
    }

}
