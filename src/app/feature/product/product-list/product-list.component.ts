import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CommonUtilitiesModule } from '../../../common-utilities/common-utilities.module';
import { NullCheckCurrencyPipe } from '../../../common-utilities/null-check-currency.pipe';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CommonUtilitiesModule, NullCheckCurrencyPipe],
  providers: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  // Fixed typo here
})
export class ProductListComponent {
  public products: Product[] = [
    new Product('Apple', 150, 3, false),
    new Product('Samsung', 100, 3, false),
    new Product('POCO', 75, 3, true),
    new Product('Lenovo', null, 3, true),
  ];
}
