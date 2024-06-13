import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CharacterEffects } from '../character/shared/store/character.effects';
import { EffectsModule } from '@ngrx/effects';
import * as characterReducers from '../character/shared/store/character.reducers';
import { CharacterListComponent } from './character-list/character-list.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { CharacterComponent } from './character.component';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListFavoritesComponent } from './character-list-favorites/character-list-favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterComponent,
    CharacterListFavoritesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    FlexModule,
    StoreModule.forFeature(
      characterReducers.CharacterFeatureKey,
      characterReducers.reducer
    ),
    EffectsModule.forFeature([CharacterEffects]),
    CharacterRoutingModule,
  ],
  exports: [
      CharacterListComponent
    ]
})
export class CharacterModule { }
