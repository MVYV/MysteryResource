import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav-sidebar',
    templateUrl: './nav-sidebar.component.html',
    styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {

    @Output() public sideNavClose = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    public onSideNavClose = () => {
        this.sideNavClose.emit();
    };

}
