import { TestBed } from '@angular/core/testing';

import { ApiVisitasService } from './api-visitas.service';

describe('ApiVisitasService', () => {
  let service: ApiVisitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiVisitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
