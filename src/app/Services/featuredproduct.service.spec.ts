import { TestBed } from '@angular/core/testing';

import { FeaturedproductService } from './featuredproduct.service';

describe('FeaturedproductService', () => {
  let service: FeaturedproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
