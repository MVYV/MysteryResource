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
import { ChartModule } from 'primeng/chart';
import { WidgetOneComponent } from './dashboard/pages/dashboard-overall/widgets/widget-one/widget-one.component';
import { WidgetTwoComponent } from './dashboard/pages/dashboard-overall/widgets/widget-two/widget-two.component';
import { WidgetThreeComponent } from './dashboard/pages/dashboard-overall/widgets/widget-three/widget-three.component';
import { WidgetFourComponent } from './dashboard/pages/dashboard-overall/widgets/widget-four/widget-four.component';
import { WidgetFiveComponent } from './dashboard/pages/dashboard-overall/widgets/widget-five/widget-five.component';
import { WidgetSixComponent } from './dashboard/pages/dashboard-overall/widgets/widget-six/widget-six.component';

@NgModule({
    declarations: [
        DashboardComponent,
        DashboardNewsComponent,
        DashboardReviewsComponent,
        DashboardTournamentsComponent,
        DashboardTechnologiesComponent,
        DashboardOverallComponent,
        DashboardUsersComponent,
        DashboardGhostSiteComponent,
        WidgetOneComponent,
        WidgetTwoComponent,
        WidgetThreeComponent,
        WidgetFourComponent,
        WidgetFiveComponent,
        WidgetSixComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AppSharedModule,
        ChartModule
    ]
})
export class DashboardModule {
}
