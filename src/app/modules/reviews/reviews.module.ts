import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsPageComponent } from './reviews/pages/reviews-page/reviews-page.component';
import { ReviewsRoutingModule } from './reviews-routing.module';


@NgModule({
    declarations: [ReviewsComponent, ReviewsPageComponent],
    imports: [
        CommonModule,
        ReviewsRoutingModule
    ]
})
export class ReviewsModule {
}
