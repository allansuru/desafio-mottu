import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '.';


export const selectAppState = createFeatureSelector<fromApp.AppState>(
  'app'
);


export const selectGeneralError = createSelector(selectAppState, state => state?.error?.isErro);
