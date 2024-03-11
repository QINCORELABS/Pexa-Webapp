import { TestBed } from '@angular/core/testing';

import { AccessoriesCarouselService } from './accessories-carousel.service';

describe('AccessoriesCarouselService', () => {
  let service: AccessoriesCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessoriesCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
