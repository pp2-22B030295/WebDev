import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "../ap/ap.component";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() removeProduct = new EventEmitter<Product>();

  like() {
    this.product.likes++;
  }

  remove() {
    this.removeProduct.emit(this.product);
  }
}
