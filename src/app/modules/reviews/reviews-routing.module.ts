import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsPageComponent } from './reviews/reviews-page/reviews-page.component';

const reviewsRoutes: Routes = [
    {
        path: '',
        component: ReviewsComponent,
        children: [
            { path: '', component: ReviewsPageComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(reviewsRoutes)],
    exports: [RouterModule]
})
export class ReviewsRoutingModule {
}
