import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CursosState } from './cursos.reducer';
import * as fromCursos from './cursos.reducer'



      export const selectCursosState = createFeatureSelector<CursosState>(
        fromCursos.cursosFeatureKey
      );

      export const selectStateCursos = createSelector(
        selectCursosState,
        (state: CursosState)=> state.cursos
      )

      export const selectStateCargando = createSelector(
        selectCursosState,
        (state: CursosState)=> state.loading
      )
  
    