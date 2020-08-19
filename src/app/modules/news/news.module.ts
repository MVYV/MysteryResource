import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsPageComponent } from './news/news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';


@NgModule({
    declarations: [NewsComponent, NewsPageComponent],
    imports: [
        CommonModule,
        NewsRoutingModule
    ]
})
export class NewsModule {
}
