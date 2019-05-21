import { TestBed } from '@angular/core/testing';

import { VideoProjecteurService } from './video-projecteur.service';

describe('VideoProjecteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoProjecteurService = TestBed.get(VideoProjecteurService);
    expect(service).toBeTruthy();
  });
});
