import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsPageComponent } from './tournaments/tournaments-page/tournaments-page.component';
import { TournamentsRoutingModule } from './tournaments-routing.module';


@NgModule({
    declarations: [TournamentsComponent, TournamentsPageComponent],
    imports: [
        CommonModule,
        TournamentsRoutingModule
    ]
})
export class TournamentsModule {
}
