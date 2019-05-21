import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoprojecteurEditComponent } from './videoprojecteur-edit.component';

describe('VideoprojecteurEditComponent', () => {
  let component: VideoprojecteurEditComponent;
  let fixture: ComponentFixture<VideoprojecteurEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoprojecteurEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoprojecteurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
