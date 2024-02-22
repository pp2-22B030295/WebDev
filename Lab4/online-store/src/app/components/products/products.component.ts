import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[]|undefined;


  constructor() {}

  ngOnInit(): void {
    let product1 = new Product("comp1", "description of comp", 10 , "assets/com1.jpg");
    let product2 = new Product("comp2", "description of comp", 0 , "assets/com2.jpg");
    let product3 = new Product("comp3", "description of comp", 8,"assets/com3.jpg");
    let product4  = new Product("comp4", "description of comp", 8,"assets/com4.jpg");
    let product5 = new Product("comp5", "description of comp", 5,"assets/com5.jpg");
    let product6 = new Product("comp6", "description of comp", 11,"assets/com6.jpg");
    let product7 = new Product("comp7", "description of comp", 8,"assets/com7.jpg");
    let product8= new Product("comp8", "description of comp", 9,"assets/com8.jpg");
    let product9 = new Product("comp9", "description of comp", 4,"assets/com9.jpg");
    let product10 = new Product("comp10", "description of comp", 1,"assets/com10.jpg");

    this.products =[product1,product2,product3,product4,product5,product6,product7,product8,product9,product10];


  }

  navigateByUrl(url:string){
    window.open(url, '_blank');
  }

}

class Product{
  name:String | undefined;
  description:string | undefined;
  rating:number |undefined;
  img:string | undefined;

  constructor(name:string, description:string , rating:number, image:string) {
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.img = image;
  }
}
