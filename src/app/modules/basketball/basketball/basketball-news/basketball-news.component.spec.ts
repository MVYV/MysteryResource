import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballNewsComponent } from './basketball-news.component';

describe('BasketballNewsComponent', () => {
  let component: BasketballNewsComponent;
  let fixture: ComponentFixture<BasketballNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketballNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
