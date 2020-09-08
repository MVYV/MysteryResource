import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../services/translate/translate.service';
import { faNewspaper, faRobot, faGamepad, faMedal, faUsers, faChartPie, faGhost } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public newsIcon = faNewspaper;
    public techIcon = faRobot;
    public gamesIcon = faGamepad;
    public tournamentIcon = faMedal;
    public usersIcon = faUsers;
    public overallIcon = faChartPie;
    public ghostIcon = faGhost;

    constructor(private translateService: TranslateService) { }

    ngOnInit(): void {
        this.translateService.use(localStorage.getItem('translationLanguage')).then();

    }

}
