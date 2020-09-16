import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSixComponent } from './widget-six.component';

describe('WidgetSixComponent', () => {
  let component: WidgetSixComponent;
  let fixture: ComponentFixture<WidgetSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
