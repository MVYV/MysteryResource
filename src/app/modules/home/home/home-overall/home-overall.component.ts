import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-overall',
    templateUrl: './home-overall.component.html',
    styleUrls: ['./home-overall.component.scss']
})
export class HomeOverallComponent implements OnInit {
    public homeCarousel = [
        {
            name: 'Civilization VI'
        },
        {
            name: 'Civilization III'
        },
        {
            name: 'FIFA 20'
        },
        {
            name: 'Counter Strike Global Offencive'
        },
        {
            name: 'FIFA 19'
        },
        {
            name: 'Civilization II'
        },
        {
            name: 'Civilization V'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
