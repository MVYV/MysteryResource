import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate/translate.pipe';
import { TranslateService } from '../../../services/translate/translate.service';
import { SharedBoxHeaderComponent } from '../../components/shared-box-header/shared-box-header.component';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { DataTableActionsComponent } from '../../components/data-table/data-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GridstackModule } from '@libria/gridstack';
import { GlobalFooterComponent } from '../../components/global-footer/global-footer.component';

export function setupTranslateFactory(service: TranslateService): Function {
    return () => service.use('ukr');
}

@NgModule({
    declarations: [
        TranslatePipe,
        SharedBoxHeaderComponent,
        DataTableComponent,
        DataTableActionsComponent,
        GlobalFooterComponent
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
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatCheckboxModule,
        MatBottomSheetModule,
        MatListModule,
        DragDropModule,
        FontAwesomeModule,
        NgbModule,
        GridstackModule.forRoot()
    ],
    exports: [
        TranslatePipe,
        SharedBoxHeaderComponent,
        DataTableComponent,
        GlobalFooterComponent,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatCheckboxModule,
        MatBottomSheetModule,
        MatListModule,
        DragDropModule,
        FontAwesomeModule,
        NgbModule,
        GridstackModule
    ]
})
export class AppSharedModule {
}
