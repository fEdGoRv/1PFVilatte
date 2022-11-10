import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.modul';

import { StudentListComponent } from './student-list.component';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListComponent ],
      imports:[MaterialModule],
      providers:[HttpClient,HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
