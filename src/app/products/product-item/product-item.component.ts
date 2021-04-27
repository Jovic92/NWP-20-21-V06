import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product: Product;
  // public product2: Product;
  // public product3: Product;

  public products: Array<Product>;

  public chosenModel: number;

  public quantities: Array<number>;
  constructor() { }

  ngOnInit(): void {
    // this.product = {
    //   name: "Monitor Dell",
    //   price: 25000,
    //   isOnSale: true,
    //   quantity: 0,
    //   imageUrl: "https://img.gigatron.rs/img/products/large/image5b854e7ad91cf.png"
    // }
    // this.product2 = {
    //   name: "Monitor ViewSonic",
    //   price: 15000,
    //   isOnSale: false,
    //   quantity: 0,
    //   imageUrl: "https://www.winwin.rs/media/catalog/product/420x420/860/94/8609418.jpg"
    // }
    // this.product3 = {
    //   name: "Benq",
    //   price: 27000,
    //   isOnSale: true,
    //   quantity: 0,
    //   imageUrl: "https://www.winwin.rs/media/catalog/product/420x420/865/47/8654761.jpg"
    // }

    this.quantities = [];
    for (let i = 1; i <= 20; i++) {
      this.quantities.push(i);
    }
    this.products = [];
    // this.products.push(this.product)
    // this.products.push(this.product2)
    // this.products.push(this.product3)

    this.products.push({
      name: "Monitor Dell",
      price: 25000,
      isOnSale: true,
      quantity: 0,
      imageUrl: "https://img.gigatron.rs/img/products/large/image5b854e7ad91cf.png",
      tempQuant: 0
    })
    this.products.push({
      name: "Monitor ViewSonic",
      price: 15000,
      isOnSale: false,
      quantity: 0,
      imageUrl: "https://www.winwin.rs/media/catalog/product/420x420/860/94/8609418.jpg",
      tempQuant: 0

    })
    this.products.push({
      name: "Benq",
      price: 27000,
      isOnSale: true,
      quantity: 0,
      imageUrl: "https://www.winwin.rs/media/catalog/product/420x420/865/47/8654761.jpg",
      tempQuant: 0

    })

    // alert(this.products.length)
  }


  incrementInCart(i:number) {
    this.products[i].quantity++;
  }


  decrementInCart(i:number) {
    if (this.products[i].quantity > 0) {
      this.products[i].quantity--;
    }
  }

  setQuantity(value: number, i:number) {
    this.products[i].quantity = value;
  }

  setQuantity2(i:number) {
    this.products[i].quantity = this.products[i].tempQuant;
  }
}
