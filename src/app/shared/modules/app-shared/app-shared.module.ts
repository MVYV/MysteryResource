import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate/translate.pipe';
import { TranslateService } from '../../../services/translate/translate.service';

export function setupTranslateFactory(service: TranslateService): Function {
    return () => service.use('ukr');
}

@NgModule({
    declarations: [
        TranslatePipe
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
        TranslatePipe
    ]
})
export class AppSharedModule {
}
