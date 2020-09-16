import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTwoComponent } from './widget-two.component';

describe('WidgetTwoComponent', () => {
  let component: WidgetTwoComponent;
  let fixture: ComponentFixture<WidgetTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
