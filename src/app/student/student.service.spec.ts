import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MaterialModule } from '../material/material.modul';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule],
      providers:[HttpClient,HttpHandler]
    });
    service = TestBed.inject(StudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
