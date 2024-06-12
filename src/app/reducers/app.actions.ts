import { createAction, props } from '@ngrx/store';

export const generalError = createAction(
  '[App] erro no app',
  props<{ data: any }>()
);




