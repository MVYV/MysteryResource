import { Component, OnInit } from '@angular/core';
import { DashboardWidgetService } from '../../../../../services/dashboard-widget/dashboard-widget.service';
import { DashboardWidgetModel } from '../../../../../shared/models/dashboard-widget.model';
import { Item } from '@libria/gridstack';

const defaultWidgetSettings: DashboardWidgetModel[] = [
    {
        id: 'widget1',
        width: 2,
        widgetSelector: 'app-widget-one'
    },
    {
        id: 'widget2',
        width: 2,
        widgetSelector: 'app-widget-two'
    },
    {
        id: 'widget3',
        width: 2,
        widgetSelector: 'app-widget-three'
    },
    {
        id: 'widget4',
        width: 2,
        widgetSelector: 'app-widget-four'
    },
    {
        id: 'widget5',
        width: 2,
        widgetSelector: 'app-widget-five'
    },
    {
        id: 'widget6',
        width: 2,
        widgetSelector: 'app-widget-six'
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
    public noMove = true;
    public noResize = true;
    public gridWidth: number;
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
            if (window.innerWidth <= 1024 && s.width > 1) {
                item.width = 1;
            } else if (window.innerWidth > 1024 && window.innerWidth < 1600 && s.width > 2) {
                item.width = 2;
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
        if (window.innerWidth <= 1024) {
            this.gridWidth = 1;
        } else if (window.innerWidth >= 1600) {
            this.gridWidth = 4;
            this.noMove = false;
            this.noResize = false;
        } else {
            this.gridWidth = 4;
        }
    }
}
