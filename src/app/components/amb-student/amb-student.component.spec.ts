import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbStudentComponent } from './amb-student.component';

describe('AmbStudentComponent', () => {
  let component: AmbStudentComponent;
  let fixture: ComponentFixture<AmbStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
