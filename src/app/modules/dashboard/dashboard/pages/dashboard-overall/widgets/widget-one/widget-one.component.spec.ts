import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOneComponent } from './widget-one.component';

describe('WidgetOneComponent', () => {
  let component: WidgetOneComponent;
  let fixture: ComponentFixture<WidgetOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
