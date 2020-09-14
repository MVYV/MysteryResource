import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNewsComponent } from './dashboard/pages/dashboard-news/dashboard-news.component';
import { DashboardReviewsComponent } from './dashboard/pages/dashboard-reviews/dashboard-reviews.component';
import { DashboardTournamentsComponent } from './dashboard/pages/dashboard-tournaments/dashboard-tournaments.component';
import { DashboardTechnologiesComponent } from './dashboard/pages/dashboard-technologies/dashboard-technologies.component';
import { DashboardOverallComponent } from './dashboard/pages/dashboard-overall/dashboard-overall.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardUsersComponent } from './dashboard/pages/dashboard-users/dashboard-users.component';
import { AppSharedModule } from '../../shared/modules/app-shared/app-shared.module';
import { DashboardGhostSiteComponent } from './dashboard/pages/dashboard-ghost-site/dashboard-ghost-site.component';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardNewsComponent,
        DashboardReviewsComponent,
        DashboardTournamentsComponent,
        DashboardTechnologiesComponent,
        DashboardOverallComponent,
        DashboardUsersComponent,
        DashboardGhostSiteComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AppSharedModule
    ]
})
export class DashboardModule {
}
