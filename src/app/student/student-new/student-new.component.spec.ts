import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { StudentNewComponent } from './student-new.component';

describe('StudentNewComponent', () => {
  let component: StudentNewComponent;
  let fixture: ComponentFixture<StudentNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentNewComponent],
      imports: [MatDialogModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        MatDialog,
        FormBuilder,
        HttpClient,
        HttpHandler
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StudentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
