import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleDispoComponent } from './salle-dispo.component';

describe('SalleDispoComponent', () => {
  let component: SalleDispoComponent;
  let fixture: ComponentFixture<SalleDispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleDispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
