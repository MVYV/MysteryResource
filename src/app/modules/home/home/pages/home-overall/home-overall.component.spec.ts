import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOverallComponent } from './home-overall.component';

describe('HomeOverallComponent', () => {
  let component: HomeOverallComponent;
  let fixture: ComponentFixture<HomeOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
