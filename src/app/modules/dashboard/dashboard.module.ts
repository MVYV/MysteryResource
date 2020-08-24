import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNewsComponent } from './dashboard/pages/dashboard-news/dashboard-news.component';
import { DashboardReviewsComponent } from './dashboard/pages/dashboard-reviews/dashboard-reviews.component';
import { DashboardTournamentsComponent } from './dashboard/pages/dashboard-tournaments/dashboard-tournaments.component';
import { DashboardTechnologiesComponent } from './dashboard/pages/dashboard-technologies/dashboard-technologies.component';
import { DashboardOverallComponent } from './dashboard/pages/dashboard-overall/dashboard-overall.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
    declarations: [
        DashboardComponent,
        DashboardNewsComponent,
        DashboardReviewsComponent,
        DashboardTournamentsComponent,
        DashboardTechnologiesComponent,
        DashboardOverallComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule {
}
