import { TestBed } from '@angular/core/testing';

import { EnvioRequestService } from './envio-request.service';

describe('EnvioRequestService', () => {
  let service: EnvioRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
