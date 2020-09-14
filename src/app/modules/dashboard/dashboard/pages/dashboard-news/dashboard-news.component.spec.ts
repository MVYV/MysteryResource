import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNewsComponent } from './dashboard-news.component';

describe('DashboardNewsComponent', () => {
  let component: DashboardNewsComponent;
  let fixture: ComponentFixture<DashboardNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
