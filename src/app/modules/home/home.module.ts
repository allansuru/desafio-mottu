import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeSearchComponent } from './home-search/home-search.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CharacterModule } from '../character/character.module';
import { SpinnerModule } from '@core/layout/spinner/spinner.module';

@NgModule({
  declarations: [
    HomeSearchComponent,
    HomeComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FlexModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CharacterModule,
    SpinnerModule
  ]
})
export class HomeModule { }
