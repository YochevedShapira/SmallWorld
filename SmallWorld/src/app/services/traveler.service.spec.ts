import { TestBed } from '@angular/core/testing';

import { TravelerService } from './traveler.service';

describe('TravelerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelerService = TestBed.get(TravelerService);
    expect(service).toBeTruthy();
  });
});
