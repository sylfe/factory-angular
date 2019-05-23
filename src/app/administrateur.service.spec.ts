import { TestBed } from '@angular/core/testing';

import { AdministrateurService } from './administrateur.service';

describe('AdministrateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministrateurService = TestBed.get(AdministrateurService);
    expect(service).toBeTruthy();
  });
});
