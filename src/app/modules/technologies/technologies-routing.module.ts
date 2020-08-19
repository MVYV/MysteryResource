import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologiesPageComponent } from './technologies/technologies-page/technologies-page.component';

const technologiesRoutes: Routes = [
    {
        path: '',
        component: TechnologiesComponent,
        children: [
            { path: '', component: TechnologiesPageComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(technologiesRoutes)],
    exports: [RouterModule]
})
export class TechnologiesRoutingModule {
}
