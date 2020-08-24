import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeOverallComponent } from './home/pages/home-overall/home-overall.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: HomeOverallComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
