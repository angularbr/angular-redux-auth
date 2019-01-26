import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer  
} from '@ngrx/store';

import * as fromAuth from '../store/reducers/auth.reducer'
import { environment } from '../../environments/environment';

export interface AppState {
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer
};

export const authFeatureState = createFeatureSelector<fromAuth.State>('auth');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

