import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballItalyComponent } from './football-italy.component';

describe('FootballItalyComponent', () => {
  let component: FootballItalyComponent;
  let fixture: ComponentFixture<FootballItalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballItalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
