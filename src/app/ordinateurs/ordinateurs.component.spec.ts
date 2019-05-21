import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateursComponent } from './ordinateurs.component';

describe('OrdinateursComponent', () => {
  let component: OrdinateursComponent;
  let fixture: ComponentFixture<OrdinateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdinateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
