import { TestBed, inject } from '@angular/core/testing';

import { LoremIpsumService } from './lorem-ipsum.service';

describe('LoremIpsumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoremIpsumService]
    });
  });

  it('should be created', inject([LoremIpsumService], (service: LoremIpsumService) => {
    expect(service).toBeTruthy();
  }));
});
