import { TestBed } from '@angular/core/testing';

import { AltaClientesApiService } from './alta-clientes-api.service';

describe('AltaClientesApiService', () => {
  let service: AltaClientesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaClientesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
