import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../../../services/translate/translate.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
    selector: 'app-nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

    @Output() public sideNavToggle = new EventEmitter();
    public userLanguage: string;

    constructor(private translateService: TranslateService, private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        localStorage.getItem('translationLanguage')
            ? this.setLanguage(localStorage.getItem('translationLanguage'))
            : this.setLanguage('ukr');
        this.userLanguage = localStorage.getItem('translationLanguage');
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

    public checkAdminPermissions() {
        // console.log('isAdmin ' + this.authenticationService.isAdmin());
        // console.log('isLoggedIn ' + this.authenticationService.isLoggedIn());
        return this.authenticationService.isAdmin();
    }

    public checkIsLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }

    public exitSite() {
        this.authenticationService.logOut();
    }

}
