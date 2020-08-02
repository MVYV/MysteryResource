import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavHeaderComponent } from './shared/components/nav-header/nav-header.component';
import { NavSidebarComponent } from './shared/components/nav-sidebar/nav-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NavSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
