import { TestBed } from '@angular/core/testing';

import { AccessGestionnaireService } from './access-gestionnaire.service';

describe('AccessGestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessGestionnaireService = TestBed.get(AccessGestionnaireService);
    expect(service).toBeTruthy();
  });
});
