
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import {
    catchError,
    map,
    switchMap,
    tap,
} from 'rxjs/operators';

import * as CharacterAction from './character.actions';
import { HomeApiService } from 'src/app/modules/home/shared/services/home.api.service';

@Injectable()
export class CharacterEffects {
    constructor(
        private actions$: Actions,
        private homeApiService: HomeApiService
    ) { }

    searchMovie$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CharacterAction.fetchCharacters),
            switchMap((movie: any) =>
                this.homeApiService.fetchCharacters(movie).pipe(map((data: any) =>
                    CharacterAction.fetchCharactersSuccess({ data: data.results })

                ), catchError((error) => of(CharacterAction.fetchCharactersFailure(error))
                )
                )
            )
        );
    });




}
