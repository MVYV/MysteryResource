import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTournamentsComponent } from './dashboard-tournaments.component';

describe('DashboardTournamentsComponent', () => {
  let component: DashboardTournamentsComponent;
  let fixture: ComponentFixture<DashboardTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
