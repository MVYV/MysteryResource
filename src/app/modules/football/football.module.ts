import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballRoutingModule } from './football-routing.module';
import { FootballComponent } from './football/football.component';
import { FootballNewsComponent } from './football/football-news/football-news.component';
import { FootballEnglandComponent } from './football/football-england/football-england.component';
import { FootballGermanyComponent } from './football/football-germany/football-germany.component';
import { FootballItalyComponent } from './football/football-italy/football-italy.component';


@NgModule({
    declarations: [FootballComponent, FootballNewsComponent, FootballEnglandComponent, FootballGermanyComponent, FootballItalyComponent],
    imports: [
        CommonModule,
        FootballRoutingModule
    ]
})
export class FootballModule {
}
