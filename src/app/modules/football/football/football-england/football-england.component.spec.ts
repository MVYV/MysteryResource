import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballEnglandComponent } from './football-england.component';

describe('FootballEnglandComponent', () => {
  let component: FootballEnglandComponent;
  let fixture: ComponentFixture<FootballEnglandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballEnglandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballEnglandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
