import { ActionReducer, ActionReducerMap, createReducer, MetaReducer, on, State } from '@ngrx/store';


import { clearState } from './clear-state';
import { storeFreeze } from 'ngrx-store-freeze';

import * as AppActions from './app.actions';
import { environment } from '@env/environment';

export const AppStateFeatureKey = 'AppStateFeature';

export interface AppState {
  error: any;
}

export const initialState: AppState = ({

  error: { isErro: false, errorMessage: '' },

});

const appReducer = createReducer(
  initialState,
  on(AppActions.generalError, (state, { data }) => {
    return { ...state, ...{ error: data } };
  }),

);

export const reducers: ActionReducerMap<any> = {
  app: appReducer
};



export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [clearState]
  : [clearState];
