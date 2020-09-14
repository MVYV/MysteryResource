import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { TranslateService } from '../../../services/translate/translate.service';

@Component({
    selector: 'app-nav-sidebar',
    templateUrl: './nav-sidebar.component.html',
    styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {

    @Output() public sideNavClose = new EventEmitter();

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
    }

    public onSideNavClose = () => {
        this.sideNavClose.emit();
    }

    public checkAdminPermissions() {
        return this.authenticationService.isAdmin();
    }

    public checkIsLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }

    public exitSite() {
        this.authenticationService.logOut();
    }

}
