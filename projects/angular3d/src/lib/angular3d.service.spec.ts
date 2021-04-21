import { TestBed } from '@angular/core/testing';

import { Angular3dService } from './angular3d.service';

describe('Angular3dService', () => {
  let service: Angular3dService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Angular3dService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
