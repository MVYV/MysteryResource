import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeOverallComponent } from './home/pages/home-overall/home-overall.component';
import { CarouselModule } from 'primeng/carousel';
import { AppSharedModule } from '../../shared/modules/app-shared/app-shared.module';

@NgModule({
    declarations: [HomeComponent, HomeOverallComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CarouselModule,
        AppSharedModule
    ]
})
export class HomeModule {
}
