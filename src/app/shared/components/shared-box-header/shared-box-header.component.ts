import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-shared-box-header',
    templateUrl: './shared-box-header.component.html',
    styleUrls: ['./shared-box-header.component.scss']
})
export class SharedBoxHeaderComponent implements OnInit {

    @Input() public boxTitle: string;

    constructor() { }

    ngOnInit(): void {
    }

}
