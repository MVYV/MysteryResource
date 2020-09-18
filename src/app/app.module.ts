import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppSharedModule } from './shared/modules/app-shared/app-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Resource modules
import { HomeModule } from './modules/home/home.module';
import { NewsModule } from './modules/news/news.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { TechnologiesModule } from './modules/technologies/technologies.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

// Shared components
import { NavHeaderComponent } from './shared/components/nav-header/nav-header.component';
import { NavSidebarComponent } from './shared/components/nav-sidebar/nav-sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';

import { ClarityModule } from '@clr/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        AppComponent,
        NavHeaderComponent,
        NavSidebarComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppSharedModule,
        HomeModule,
        NewsModule,
        ReviewsModule,
        TournamentsModule,
        TechnologiesModule,
        AuthenticationModule,
        DashboardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatExpansionModule,
        ClarityModule,
        FontAwesomeModule
    ],
    providers: [],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
