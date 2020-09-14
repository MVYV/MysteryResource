import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate/translate.pipe';
import { TranslateService } from '../../../services/translate/translate.service';
import { SharedBoxHeaderComponent } from '../../components/shared-box-header/shared-box-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridstackModule } from '@libria/gridstack';

export function setupTranslateFactory(service: TranslateService): Function {
    return () => service.use('ukr');
}

@NgModule({
    declarations: [
        TranslatePipe,
        SharedBoxHeaderComponent
    ],
    providers: [
        TranslateService,
        {
            provide: APP_INITIALIZER,
            useFactory: setupTranslateFactory,
            deps: [TranslateService],
            multi: true
        }
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        FontAwesomeModule,
        NgbModule,
        GridstackModule.forRoot()
    ],
    exports: [
        TranslatePipe,
        SharedBoxHeaderComponent,
        MatIconModule,
        MatButtonModule,
        FontAwesomeModule,
        NgbModule,
        GridstackModule
    ]
})
export class AppSharedModule {
}
