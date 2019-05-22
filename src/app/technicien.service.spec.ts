import { TestBed } from '@angular/core/testing';

import { TechnicienService } from './technicien.service';

describe('TechnicienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechnicienService = TestBed.get(TechnicienService);
    expect(service).toBeTruthy();
  });
});
