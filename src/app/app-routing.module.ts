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
                path: 'news',
                loadChildren: 'src/app/modules/news/news.module#NewsModule'
            },
            {
                path: 'reviews',
                loadChildren: 'src/app/modules/reviews/reviews.module#ReviewsModule'
            },
            {
                path: 'tournaments',
                loadChildren: 'src/app/modules/tournaments/tournaments.module#TournamentsModule'
            },
            {
                path: 'technologies',
                loadChildren: 'src/app/modules/technologies/technologies.module#TechnologiesModule'
            },
            {
                path: 'login',
                loadChildren: 'src/app/modules/authentication/authentication.module#AuthenticationModule'
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
