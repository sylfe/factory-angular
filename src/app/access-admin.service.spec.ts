import { TestBed } from '@angular/core/testing';

import { AccessAdminService } from './access-admin.service';

describe('AccessAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessAdminService = TestBed.get(AccessAdminService);
    expect(service).toBeTruthy();
  });
});
