import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceHockeyComponent } from './ice-hockey/ice-hockey.component';
import { IceHockeyNewsComponent } from './ice-hockey/ice-hockey-news/ice-hockey-news.component';

const iceHockeyRoutes: Routes = [
    {
        path: '',
        component: IceHockeyComponent,
        children: [
            { path: '', component: IceHockeyNewsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(iceHockeyRoutes)],
    exports: [RouterModule]
})
export class IceHockeyRoutingModule { }
