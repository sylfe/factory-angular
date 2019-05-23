import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningVueComponent } from './planning-vue.component';

describe('PlanningVueComponent', () => {
  let component: PlanningVueComponent;
  let fixture: ComponentFixture<PlanningVueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningVueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
