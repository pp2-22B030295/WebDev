import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItemComponent} from "../product-item/product-item.component";
import {Category, Product} from "../ap/ap.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  @Input() category!: Category;
  @Input() product!: Product;
  @Output() removeProduct = new EventEmitter<Product>();

  navigateByUrl(url:string){
    window.open(url, '_blank');
  }
  like() {
    this.product.increaseLike()
  }

  remove() {
    this.removeProduct.emit(this.product);
  }

}
