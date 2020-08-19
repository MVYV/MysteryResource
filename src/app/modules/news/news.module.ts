import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsPageComponent } from './news/news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { AppSharedModule } from '../../shared/modules/app-shared/app-shared.module';


@NgModule({
    declarations: [NewsComponent, NewsPageComponent],
    imports: [
        CommonModule,
        NewsRoutingModule,
        AppSharedModule
    ]
})
export class NewsModule {
}
