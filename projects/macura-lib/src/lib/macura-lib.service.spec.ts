import { TestBed } from '@angular/core/testing';

import { MacuraLibService } from './macura-lib.service';

describe('MacuraLibService', () => {
  let service: MacuraLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacuraLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
