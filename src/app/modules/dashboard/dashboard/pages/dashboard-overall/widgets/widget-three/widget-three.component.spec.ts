import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetThreeComponent } from './widget-three.component';

describe('WidgetThreeComponent', () => {
  let component: WidgetThreeComponent;
  let fixture: ComponentFixture<WidgetThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
