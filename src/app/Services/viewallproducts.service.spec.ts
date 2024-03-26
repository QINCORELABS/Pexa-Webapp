import { TestBed } from '@angular/core/testing';

import { ViewallproductsService } from './viewallproducts.service';

describe('ViewallproductsService', () => {
  let service: ViewallproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewallproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
