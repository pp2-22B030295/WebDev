import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  standalone: true,
  imports: [
    ProductListComponent,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./ap.component.css']
})
export class ApComponent {
  categories: Category[] = [];
  selectedCategory: Category | null = null;

  constructor() {
    const computers: Product[] = [
      new Product('comp1',  "assets/c1.jpg"),
      new Product('comp2', "assets/c2.jpg"),
      new Product('comp3', "assets/c3.jpg"),
      new Product('comp4',  "assets/c4.jpg"),
      new Product('comp5',  "assets/c5.jpg"),

    ];

    const keyboards: Product[] = [
      new Product('keyboard1',  "assets/k1.jpg"),
      new Product('keyboard2',  "assets/k2.jpg"),
      new Product('keyboard1',  "assets/k3.jpg"),
      new Product('keyboard2',  "assets/k4.jpg"),
      new Product('keyboard1',  "assets/k5.jpg"),

    ];

    const mouses: Product[] = [
      new Product('mouse1', 'assets/m1.jpg'),
      new Product('mouse2', 'assets/m2.jpg'),
      new Product('mouse1', 'assets/m3.jpg'),
      new Product('mouse2', 'assets/m4.jpg'),
      new Product('mouse1', 'assets/m5.jpg'),

    ];

    const laptops: Product[] = [
      new Product('laptop1', 'assets/lap1.jpg'),
      new Product('laptop2', 'assets/lap2.jpg'),
      new Product('laptop1', 'assets/lap3.jpg'),
      new Product('laptop2', 'assets/lap4.jpg'),
      new Product('laptop1', 'assets/lap5.jpg'),

    ];

    this.categories = [
      new Category('Computers', computers),
      new Category('Keyboards', keyboards),
      new Category('Mouses', mouses),
      new Category('Laptops', laptops)
    ];
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(product: Product) {
    for (let i = 0; i < this.categories.length; i++) {
      const index = this.categories[i].products.indexOf(product);
      if (index !== -1) {
        this.categories[i].products.splice(index, 1);
        break;
      }
    }
  }

}

export class Category {
  name: string;
  products: Product[];

  constructor(name: string, products: Product[]) {
    this.name = name;
    this.products = products;
  }

}

export class Product {
  name: string;
  likes: number = 0;
  img: string;

  constructor(name: string, img:string) {
    this.name = name;
    this.img = img;
  }
  public increaseLike(){
    this.likes++;
  }
}
