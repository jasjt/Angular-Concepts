import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { CommonUtilitiesModule } from '../../../common-utilities/common-utilities.module';
import { CommonModule } from '@angular/common';
import { NullCheckCurrencyPipe } from '../../../common-utilities/null-check-currency.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CommonUtilitiesModule, NullCheckCurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  // Fixed typo here
})
export class ProductListComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.products);
  }
  public products: Product[] = [
    new Product('Apple', 150, 3, false),
    new Product('Samsung', 100, 3, false),
    new Product('POCO', 75, 3, true),
    new Product('Lenovo', null, 3, true),
  ];
}
