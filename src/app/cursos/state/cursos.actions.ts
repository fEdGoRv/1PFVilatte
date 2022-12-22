import { createAction, props } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';

export const loadCursos = createAction(
  '[Cursos] load Cursos'
);

export const loadCursosSuccess = createAction(
  '[Cursos] Load Cursos Success',
  props<{ cursos: Curso[] }>()
);

export const loadCursosFailure = createAction(
  '[Cursos] Load Cursos Failure',
  props<{ error: any }>()
);
