import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren: 'src/app/modules/home/home.module#HomeModule'
            },
            {
                path: 'football',
                loadChildren: 'src/app/modules/football/football.module#FootballModule'
            },
            {
                path: 'basketball',
                loadChildren: 'src/app/modules/basketball/basketball.module#BasketballModule'
            },
            {
                path: 'ice-hockey',
                loadChildren: 'src/app/modules/ice-hockey/ice-hockey.module#IceHockeyModule'
            },
            { path: 'error', component: PageNotFoundComponent },
            { path: '**', redirectTo: 'error' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
