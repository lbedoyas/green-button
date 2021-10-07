import { TestBed } from '@angular/core/testing';

import { GreenButtonService } from './green-button.service';

describe('GreenButtonService', () => {
  let service: GreenButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
