import { TestBed } from '@angular/core/testing';

import { EliteApiService } from './elite-api.service';

describe('EliteApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EliteApiService = TestBed.get(EliteApiService);
    expect(service).toBeTruthy();
  });
});
