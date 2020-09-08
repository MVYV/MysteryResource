import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGhostSiteComponent } from './dashboard-ghost-site.component';

describe('DashboardGhostSiteComponent', () => {
  let component: DashboardGhostSiteComponent;
  let fixture: ComponentFixture<DashboardGhostSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGhostSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGhostSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
