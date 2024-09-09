import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HighlightDirective } from './highlight.directive';
import { NullCheckCurrencyPipe } from './null-check-currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    LoadingSpinnerComponent,
    HighlightDirective,
    NullCheckCurrencyPipe
  ],
  exports: [
    LoadingSpinnerComponent,
    HighlightDirective,
    NullCheckCurrencyPipe
  ]
})
export class CommonUtilitiesModule { }
