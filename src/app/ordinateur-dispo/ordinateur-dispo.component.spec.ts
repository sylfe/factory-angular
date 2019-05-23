import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurDispoComponent } from './ordinateur-dispo.component';

describe('OrdinateurDispoComponent', () => {
  let component: OrdinateurDispoComponent;
  let fixture: ComponentFixture<OrdinateurDispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateurDispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
