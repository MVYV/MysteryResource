import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFiveComponent } from './widget-five.component';

describe('WidgetFiveComponent', () => {
  let component: WidgetFiveComponent;
  let fixture: ComponentFixture<WidgetFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
