import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { PageContentComponent } from './page-content.component';

@NgModule({
  imports: [CommonModule, FlexModule, FlexLayoutModule],
  declarations: [PageContentComponent],
  exports: [PageContentComponent]
})
export class PageContentModule {}
