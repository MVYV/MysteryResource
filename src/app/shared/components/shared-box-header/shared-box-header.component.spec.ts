import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBoxHeaderComponent } from './shared-box-header.component';

describe('SharedBoxHeaderComponent', () => {
  let component: SharedBoxHeaderComponent;
  let fixture: ComponentFixture<SharedBoxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBoxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
