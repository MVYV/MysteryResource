import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Shared components
import { NavHeaderComponent } from './shared/components/nav-header/nav-header.component';
import { NavSidebarComponent } from './shared/components/nav-sidebar/nav-sidebar.component';
import { NavSidenavComponent } from './shared/components/nav-sidenav/nav-sidenav.component';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';

// Primeng modules
import { AccordionModule } from 'primeng/accordion';


@NgModule({
    declarations: [
        AppComponent,
        NavHeaderComponent,
        NavSidebarComponent,
        NavSidenavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        AccordionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
