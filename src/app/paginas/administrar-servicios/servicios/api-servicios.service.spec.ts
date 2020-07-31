import { TestBed } from '@angular/core/testing';

import { ApiServiciosService } from './api-servicios.service';

describe('ApiServiciosService', () => {
  let service: ApiServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
