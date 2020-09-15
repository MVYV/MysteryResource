import { Component, OnInit } from '@angular/core';
import { DashboardWidgetService } from '../../../../../services/dashboard-widget/dashboard-widget.service';
import { DashboardWidgetModel } from '../../../../../shared/models/dashboard-widget.model';
import { Item } from '@libria/gridstack';

const defaultWidgetSettings: DashboardWidgetModel[] = [
    {
        id: 'widget1',
        width: 1,
        height: 7,
        enabled: true
    },
    {
        id: 'widget2',
        width: 1,
        height: 7,
        enabled: true
    },
    {
        id: 'widget3',
        width: 1,
        height: 7,
        enabled: true
    },
    {
        id: 'widget4',
        width: 1,
        height: 7,
        enabled: true
    },
    {
        id: 'widget5',
        width: 1,
        height: 7,
        enabled: true
    },
    {
        id: 'widget6',
        width: 1,
        height: 7,
        enabled: true
    }
];

@Component({
    selector: 'app-dashboard-overall',
    templateUrl: './dashboard-overall.component.html',
    styleUrls: ['./dashboard-overall.component.scss']
})
export class DashboardOverallComponent implements OnInit {

    public isDashboardWidgetSettingsLoaded = false;
    public widgetSettings: DashboardWidgetModel[] = defaultWidgetSettings;
    public noMove: boolean;
    public noResize: boolean;
    public gridWidth = 3;
    public gridHeight = 14;

    constructor(private dashboardWidgetService: DashboardWidgetService) {
    }

    ngOnInit(): void {
        this.setMoveResizePermissions();
        this.dashboardWidgetService.loadSettings();
        this.dashboardWidgetService.widgetsSettingsInfo.subscribe(
            settings => {
                settings.forEach(s => {
                    const settingsIndex = this.widgetSettings.findIndex(defaultSettings => defaultSettings.id === s.id);
                    this.widgetSettings.splice(settingsIndex, 1, s);
                });
                this.isDashboardWidgetSettingsLoaded = true;
            }
        );
    }

    public onGridChange($event: Item[]) {
        const newWidgetSettings = this.widgetSettings.map(s => {
            const item = $event.find(i => i.id === s.id);
            if (!item) {
                return s;
            }
            return {
                ...s,
                x: item.x,
                y: item.y,
                width: item.width,
                height: item.height
            };
        });
        this.dashboardWidgetService.saveSettings(newWidgetSettings);
    }

    private setMoveResizePermissions() {
        if (window.innerWidth <= 1600) {
            this.noMove = true;
            this.noResize = true;
        }
    }
}
