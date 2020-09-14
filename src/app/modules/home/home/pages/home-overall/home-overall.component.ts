import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-home-overall',
    templateUrl: './home-overall.component.html',
    styleUrls: ['./home-overall.component.scss']
})
export class HomeOverallComponent implements OnInit {

    public images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `assets/images/test/img${n}.png`);

    public paused = false;
    public unpauseOnArrow = false;
    public pauseOnIndicator = false;
    public pauseOnHover = true;

    @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

    constructor() { }

    ngOnInit(): void {
    }

    public togglePaused(): void {
        if (this.paused) {
            this.carousel.cycle();
        } else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }

    public onSlide(slideEvent: NgbSlideEvent): void {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
            this.togglePaused();
        }
    }


}
