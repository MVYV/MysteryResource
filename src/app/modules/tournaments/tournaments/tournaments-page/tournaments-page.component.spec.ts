import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsPageComponent } from './tournaments-page.component';

describe('TournamentsPageComponent', () => {
  let component: TournamentsPageComponent;
  let fixture: ComponentFixture<TournamentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
