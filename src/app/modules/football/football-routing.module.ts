import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootballComponent } from './football/football.component';
import { FootballNewsComponent } from './football/football-news/football-news.component';
import { FootballEnglandComponent } from './football/football-england/football-england.component';
import { FootballGermanyComponent } from './football/football-germany/football-germany.component';
import { FootballItalyComponent } from './football/football-italy/football-italy.component';

const footballRoutes: Routes = [
    {
        path: '',
        component: FootballComponent,
        children: [
            { path: '', component: FootballNewsComponent },
            { path: 'england', component: FootballEnglandComponent },
            { path: 'germany', component: FootballGermanyComponent },
            { path: 'italy', component: FootballItalyComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(footballRoutes)],
    exports: [RouterModule]
})
export class FootballRoutingModule { }
