import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;

  public products: Product[];

  public chosenModel: number;

  public quantities: Array<number>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    // this.productService.getProducts().pipe(
    //   map(rez => this.products = rez)
    // ).subscribe();

    this.productService.getProducts().subscribe(
      rez => this.products = rez
    )

    this.quantities = [];
    for (let i = 1; i <= 20; i++) {
      this.quantities.push(i);
    }
  }


  incrementInCart(i: number) {
    this.products[i].quantity++;
  }


  decrementInCart(i: number) {
    if (this.products[i].quantity > 0) {
      this.products[i].quantity--;
    }
  }

  setQuantity(value: number, i: number) {
    this.products[i].quantity = value;
  }

  setQuantity2(i: number) {
    this.products[i].quantity = this.products[i].tempQuant;
  }
}
