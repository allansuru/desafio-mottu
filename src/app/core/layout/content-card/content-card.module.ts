import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { ContentCardComponent } from './content-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    MatCardModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  declarations: [ContentCardComponent],
  exports: [ContentCardComponent]
})
export class ContentCardModule { }
