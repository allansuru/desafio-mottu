
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as CharacterAction from './character.actions';
import { act } from '@ngrx/effects';
import { Character } from '../interfaces/character.interface';

export const CharacterFeatureKey = 'CharacterState';


export interface State extends EntityState<Character> {
    loading: boolean;
    favorites: Character[];
  }

  export function selectIdByExtract(extract: any) {
    return extract.id;
  }
  
  export const adapter: EntityAdapter<Character> = createEntityAdapter<Character>({
    selectId: selectIdByExtract,
  });

  export const initialState: State = adapter.getInitialState({
    loading: false,
    characters: [],
    favorites: [],
  });
  
  
export const { selectAll, selectEntities, selectIds, selectTotal } =
adapter.getSelectors();


const CharacterReducer = createReducer(
    initialState,
  
    on(CharacterAction.fetchCharacters, (state) => {
  
      return ({
        ...state,
        ...{ loading: true },
      });
    }),
  
    on(CharacterAction.fetchCharactersFailure, (state, action) => ({
      ...state,
      ...{ loading: false, },
    })),
  
    on(CharacterAction.fetchCharactersSuccess, (state, action) => {
      return adapter.setAll(action.data, {
        ...state,
        characters: action.data,
        ...{ loading: false, },
      });
    }
    ),
    on(CharacterAction.addFavorite, (state, { data }) => {
      const isFavorite = state.favorites.some(fav => fav.id === data.id);
      const favorites = isFavorite
        ? state.favorites.filter(fav => fav.id !== data.id)
        : [...state.favorites, data];
  
      return {
        ...state,
        favorites
      };
    })
  );


export function reducer(state: State | undefined, action: Action) {
    return CharacterReducer(state, action);
  }
  