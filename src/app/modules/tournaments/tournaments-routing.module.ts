import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsPageComponent } from './tournaments/tournaments-page/tournaments-page.component';

const tournamentsRoutes: Routes = [
    {
        path: '',
        component: TournamentsComponent,
        children: [
            { path: '', component: TournamentsPageComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(tournamentsRoutes)],
    exports: [RouterModule]
})
export class TournamentsRoutingModule {
}
