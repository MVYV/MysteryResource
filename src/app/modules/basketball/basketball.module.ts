import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketballRoutingModule } from './basketball-routing.module';
import { BasketballComponent } from './basketball/basketball.component';
import { BasketballNewsComponent } from './basketball/basketball-news/basketball-news.component';


@NgModule({
    declarations: [BasketballComponent, BasketballNewsComponent],
    imports: [
        CommonModule,
        BasketballRoutingModule
    ]
})
export class BasketballModule {
}
