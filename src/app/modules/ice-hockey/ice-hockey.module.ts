import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IceHockeyRoutingModule } from './ice-hockey-routing.module';
import { IceHockeyComponent } from './ice-hockey/ice-hockey.component';
import { IceHockeyNewsComponent } from './ice-hockey/ice-hockey-news/ice-hockey-news.component';


@NgModule({
    declarations: [IceHockeyComponent, IceHockeyNewsComponent],
    imports: [
        CommonModule,
        IceHockeyRoutingModule
    ]
})
export class IceHockeyModule {
}
