import { createReducer, on } from '@ngrx/store';
import {Curso} from '../../models/curso'
import * as CursosActions from './cursos.actions';


export const cursosFeatureKey = 'cursos';

export interface CursosState {
loading: boolean,
cursos: Curso[]
}

export const initialState: CursosState = {
loading:false,
cursos:[]
};

export const reducer = createReducer(
  initialState,
  on(CursosActions.loadCursos, (state)=>{
    return {...state, loading:true}
  }),
  on(CursosActions.loadCursosSuccess, (state, {cursos}) => {
    return {...state, cargando: false, cursos}
  }),
  on(CursosActions.loadCursosFailure, (state, {error}) => {
    return state
  }),

);
