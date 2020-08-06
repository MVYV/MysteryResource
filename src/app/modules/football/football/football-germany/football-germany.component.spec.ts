import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballGermanyComponent } from './football-germany.component';

describe('FootballGermanyComponent', () => {
  let component: FootballGermanyComponent;
  let fixture: ComponentFixture<FootballGermanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballGermanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballGermanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
