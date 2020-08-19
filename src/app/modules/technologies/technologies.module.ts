import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologiesPageComponent } from './technologies/technologies-page/technologies-page.component';
import { TechnologiesRoutingModule } from './technologies-routing.module';


@NgModule({
    declarations: [TechnologiesComponent, TechnologiesPageComponent],
    imports: [
        CommonModule,
        TechnologiesRoutingModule
    ]
})
export class TechnologiesModule {
}
