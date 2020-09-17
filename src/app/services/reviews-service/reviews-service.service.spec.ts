import { TestBed } from '@angular/core/testing';

import { ReviewsServiceService } from './reviews-service.service';

describe('ReviewsServiceService', () => {
  let service: ReviewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
