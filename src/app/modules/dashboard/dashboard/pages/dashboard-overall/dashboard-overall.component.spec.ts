import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverallComponent } from './dashboard-overall.component';

describe('DashboardOverallComponent', () => {
  let component: DashboardOverallComponent;
  let fixture: ComponentFixture<DashboardOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
