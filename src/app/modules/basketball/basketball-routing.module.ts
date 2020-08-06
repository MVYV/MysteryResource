import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketballComponent } from './basketball/basketball.component';
import { BasketballNewsComponent } from './basketball/basketball-news/basketball-news.component';

const basketballRoutes: Routes = [
    {
        path: '',
        component: BasketballComponent,
        children: [
            { path: '', component: BasketballNewsComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(basketballRoutes)],
    exports: [RouterModule]
})
export class BasketballRoutingModule { }
