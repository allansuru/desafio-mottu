import { createAction, props } from '@ngrx/store';

export const fetchCharacters = createAction(
  '[CHARACTER API] Load Characters',
  props<{ data: any }>()
);

export const fetchCharactersSuccess = createAction(
    '[CHARACTER API] Load CharactersSuccess',
    props<{ data: any }>()
  );
  
  export const fetchCharactersFailure = createAction(
    '[CHARACTER API] Load CharactersFailure',
    props<{ error: any }>()
  );
  