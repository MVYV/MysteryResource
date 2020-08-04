import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav-header',
    templateUrl: './nav-header.component.html',
    styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

    @Output() public sideNavToggle = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    public onToggleSideNav = () => {
        this.sideNavToggle.emit();
    };

}
