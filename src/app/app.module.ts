import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Resource modules
import { HomeModule } from './modules/home/home.module';
import { NewsModule } from './modules/news/news.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { TournamentsModule } from './modules/tournaments/tournaments.module';
import { TechnologiesModule } from './modules/technologies/technologies.module';

// Shared components
import { NavHeaderComponent } from './shared/components/nav-header/nav-header.component';
import { NavSidebarComponent } from './shared/components/nav-sidebar/nav-sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

// Primeng modules
import { AccordionModule } from 'primeng/accordion';
import { ClarityModule } from '@clr/angular';
import { TranslatePipe } from './pipes/translate/translate.pipe';
import { TranslateService } from './services/translate/translate.service';

export function setupTranslateFactory(service: TranslateService): Function {
    return () => service.use('ukr');
}

@NgModule({
    declarations: [
        AppComponent,
        NavHeaderComponent,
        NavSidebarComponent,
        PageNotFoundComponent,
        TranslatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HomeModule,
        NewsModule,
        ReviewsModule,
        TournamentsModule,
        TechnologiesModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        AccordionModule,
        ClarityModule
    ],
    providers: [
        TranslateService,
        {
            provide: APP_INITIALIZER,
            useFactory: setupTranslateFactory,
            deps: [TranslateService],
            multi: true
        }
    ],
    exports: [
        TranslatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
