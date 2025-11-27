import { TestBed } from '@angular/core/testing';

import { SteamGameService } from './steam-game-service';

describe('SteamGameService', () => {
  let service: SteamGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
