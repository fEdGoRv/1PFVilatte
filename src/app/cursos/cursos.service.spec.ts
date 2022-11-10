import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CursosService } from './cursos.service';

describe('CursosService', () => {
  let service: CursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(CursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
