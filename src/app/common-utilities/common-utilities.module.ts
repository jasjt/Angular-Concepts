import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    LoadingSpinnerComponent,
    HighlightDirective
  ],
  exports: [
    LoadingSpinnerComponent,
    HighlightDirective
  ]
})
export class CommonUtilitiesModule { }
