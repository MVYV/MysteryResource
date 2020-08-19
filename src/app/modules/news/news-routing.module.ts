import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { NewsPageComponent } from './news/news-page/news-page.component';

const newsRoutes: Routes = [
    {
        path: '',
        component: NewsComponent,
        children: [
            { path: '', component: NewsPageComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(newsRoutes)],
    exports: [RouterModule]
})
export class NewsRoutingModule {
}
