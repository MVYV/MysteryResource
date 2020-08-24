import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTechnologiesComponent } from './dashboard-technologies.component';

describe('DashboardTechnologiesComponent', () => {
  let component: DashboardTechnologiesComponent;
  let fixture: ComponentFixture<DashboardTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
