import { TestBed, inject } from '@angular/core/testing';

import { YoutubeserviceService } from './youtubeservice.service';

describe('YoutubeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeserviceService]
    });
  });

  it('should be created', inject([YoutubeserviceService], (service: YoutubeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
