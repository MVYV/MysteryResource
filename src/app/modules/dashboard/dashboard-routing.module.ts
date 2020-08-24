import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNewsComponent } from './dashboard/pages/dashboard-news/dashboard-news.component';
import { DashboardReviewsComponent } from './dashboard/pages/dashboard-reviews/dashboard-reviews.component';
import { DashboardTournamentsComponent } from './dashboard/pages/dashboard-tournaments/dashboard-tournaments.component';
import { DashboardTechnologiesComponent } from './dashboard/pages/dashboard-technologies/dashboard-technologies.component';
import { DashboardOverallComponent } from './dashboard/pages/dashboard-overall/dashboard-overall.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', component: DashboardOverallComponent },
            { path: 'news', component: DashboardNewsComponent },
            { path: 'reviews', component: DashboardReviewsComponent },
            { path: 'tournaments', component: DashboardTournamentsComponent },
            { path: 'technologies', component: DashboardTechnologiesComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
