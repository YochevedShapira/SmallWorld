import { TestBed } from '@angular/core/testing';

import { LocationHostService } from './location-host.service';

describe('LocationHostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationHostService = TestBed.get(LocationHostService);
    expect(service).toBeTruthy();
  });
});
