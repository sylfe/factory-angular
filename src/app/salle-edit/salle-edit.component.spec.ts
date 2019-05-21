import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleEditComponent } from './salle-edit.component';

describe('SalleEditComponent', () => {
  let component: SalleEditComponent;
  let fixture: ComponentFixture<SalleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
