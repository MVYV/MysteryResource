import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ReviewsService } from '../../../../../services/reviews-service/reviews.service';
import { ReviewModel } from '../../../../../shared/models/review.model';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-dashboard-reviews',
    templateUrl: './dashboard-reviews.component.html',
    styleUrls: ['./dashboard-reviews.component.scss']
})
export class DashboardReviewsComponent implements OnInit, AfterViewInit, OnDestroy {

    public reviewsList: ReviewModel[];
    private reviewsLoadSubscription: Subscription;

    displayedColumnsList: string[] = [];

    constructor(private reviewsService: ReviewsService) {
    }

    ngOnInit(): void {
        this.loadReviews();
    }

    ngAfterViewInit(): void {
    }

    ngOnDestroy(): void {
        if (this.reviewsLoadSubscription) {
            this.reviewsLoadSubscription.unsubscribe();
        }
    }

    public loadReviews() {
        this.reviewsLoadSubscription = this.reviewsService.getReviews().subscribe(
            (response: any) => {
                this.reviewsList = response;
            },
            error => {
            },
            () => {
                for (const key in this.reviewsList[0]) {
                    if (this.reviewsList[0].hasOwnProperty(key) && key !== 'id') {
                        this.displayedColumnsList.push(key);
                    }
                }
            }
        );
    }
}
