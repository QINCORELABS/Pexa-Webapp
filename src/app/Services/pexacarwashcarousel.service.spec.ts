import { TestBed } from '@angular/core/testing';

import { PexacarwashcarouselService } from './pexacarwashcarousel.service';

describe('PexacarwashcarouselService', () => {
  let service: PexacarwashcarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexacarwashcarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
