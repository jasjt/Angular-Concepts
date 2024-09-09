import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullCheckCurrency',
  standalone: true
})
export class NullCheckCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) {}

  transform(value: any, currencyCode?: string, display?: string | boolean, digitsInfo?: string, locale?: string): string | null {
    if(!value){
      return this.currencyPipe.transform(0, currencyCode, display, digitsInfo, locale);
    }
    return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
  }

}
