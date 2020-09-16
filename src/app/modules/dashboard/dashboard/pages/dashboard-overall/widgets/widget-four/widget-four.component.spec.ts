import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFourComponent } from './widget-four.component';

describe('WidgetFourComponent', () => {
  let component: WidgetFourComponent;
  let fixture: ComponentFixture<WidgetFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
