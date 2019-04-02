import { TestBed } from '@angular/core/testing';

import { SynServiceService } from './syn-service.service';

describe('SynServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynServiceService = TestBed.get(SynServiceService);
    expect(service).toBeTruthy();
  });
});
