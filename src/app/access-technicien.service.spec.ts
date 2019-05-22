import { TestBed } from '@angular/core/testing';

import { AccessTechnicienService } from './access-technicien.service';

describe('AccessTechnicienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessTechnicienService = TestBed.get(AccessTechnicienService);
    expect(service).toBeTruthy();
  });
});
