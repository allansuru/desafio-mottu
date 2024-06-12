import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CharacterEffects } from '../character/shared/store/character.effects';
import { EffectsModule } from '@ngrx/effects';


import * as characterReducers from '../character/shared/store/character.reducers';
import { CharacterListComponent } from './character-list/character-list.component';



@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      characterReducers.CharacterFeatureKey,
      characterReducers.reducer
    ),
    EffectsModule.forFeature([CharacterEffects]),
  ],
  exports: [
      CharacterListComponent
    ]
})
export class CharacterModule { }
