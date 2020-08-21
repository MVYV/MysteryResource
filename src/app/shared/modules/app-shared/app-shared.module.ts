import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate/translate.pipe';
import { TranslateService } from '../../../services/translate/translate.service';
import { SharedBoxHeaderComponent } from '../../components/shared-box-header/shared-box-header.component';

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
        CommonModule
    ],
    exports: [
        TranslatePipe,
        SharedBoxHeaderComponent
    ]
})
export class AppSharedModule {
}
