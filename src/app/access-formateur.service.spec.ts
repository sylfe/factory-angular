import { TestBed } from '@angular/core/testing';

import { AccessFormateurService } from './access-formateur.service';

describe('AccessFormateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessFormateurService = TestBed.get(AccessFormateurService);
    expect(service).toBeTruthy();
  });
});
