import { TestBed } from '@angular/core/testing';

import { ServicioTecnicosService } from './servicio-tecnicos.service';

describe('ServicioTecnicosService', () => {
  let service: ServicioTecnicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTecnicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
