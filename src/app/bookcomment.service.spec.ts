import { TestBed } from '@angular/core/testing';

import { BookcommentService } from './bookcomment.service';

describe('BookcommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookcommentService = TestBed.get(BookcommentService);
    expect(service).toBeTruthy();
  });
});
