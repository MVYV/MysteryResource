import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceHockeyNewsComponent } from './ice-hockey-news.component';

describe('IceHockeyNewsComponent', () => {
  let component: IceHockeyNewsComponent;
  let fixture: ComponentFixture<IceHockeyNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceHockeyNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceHockeyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
