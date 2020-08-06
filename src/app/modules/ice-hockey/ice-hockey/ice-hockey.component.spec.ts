import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceHockeyComponent } from './ice-hockey.component';

describe('IceHockeyComponent', () => {
  let component: IceHockeyComponent;
  let fixture: ComponentFixture<IceHockeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceHockeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceHockeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
