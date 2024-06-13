import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCharacter from './character.reducers';

export const selectCharacterState = createFeatureSelector<fromCharacter.State>(
    fromCharacter.CharacterFeatureKey
);

export const selectCharacterLoading = createSelector(
    selectCharacterState,
  (state) => state.loading
);

export const selectMoviesEntities = createSelector(
    selectCharacterState,
    fromCharacter.selectEntities
);

export const selectAllCharacters = createSelector(selectCharacterState, state =>
    fromCharacter.selectAll(state)
);

export const selectCharacterFavorites = createSelector(
    selectCharacterState,
  (state) => state.favorites
);

export const selectCharacterFavoritesLenght = createSelector(
    selectCharacterState,
  (state) => state?.favorites?.length
);

