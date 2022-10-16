import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearStudentDialogComponent } from './crear-student-dialog.component';

describe('CrearStudentDialogComponent', () => {
  let component: CrearStudentDialogComponent;
  let fixture: ComponentFixture<CrearStudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearStudentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
