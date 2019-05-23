import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrateurEditComponent } from './administrateur-edit.component';

describe('AdministrateurEditComponent', () => {
  let component: AdministrateurEditComponent;
  let fixture: ComponentFixture<AdministrateurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrateurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
