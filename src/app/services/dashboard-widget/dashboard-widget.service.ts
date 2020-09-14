import { Injectable } from '@angular/core';
import { DashboardWidgetModel } from '../../shared/models/dashboard-widget.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardWidgetService {

    private widgetsSettings = new Subject<DashboardWidgetModel[]>();
    public widgetsSettingsInfo: Observable<DashboardWidgetModel[]> = this.widgetsSettings.asObservable();

    constructor() {
    }

    public loadSettings(): void {
        const widgetSettingsData = localStorage.getItem('widgetSettings');

        if (!!widgetSettingsData) {
            const configs = JSON.parse(widgetSettingsData) as DashboardWidgetModel[];
            setTimeout(() => this.widgetsSettings.next(configs), 3000);
        } else {
            setTimeout(() => this.widgetsSettings.next([]), 3000);
        }
    }

    public saveSettings(configs: DashboardWidgetModel[]) {
        localStorage.setItem('widgetSettings', JSON.stringify(configs));
        this.widgetsSettings.next(configs);
    }
}
