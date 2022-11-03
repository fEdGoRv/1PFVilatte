import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInicioComponent } from './student-inicio.component';

describe('StudentInicioComponent', () => {
  let component: StudentInicioComponent;
  let fixture: ComponentFixture<StudentInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
