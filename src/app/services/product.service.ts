import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {

    //ovde inicijalizuj listu produkata i pojedinacni

    this.products = [];

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

  }


  getProducts(): Observable<Product[]>{
    console.log("servis: getProducts method is being called")
    return of(this.products)
  }

  createProduct(product: Product):Observable<any>{
    let productClone = Object.assign({}, product);
    console.log("servis: createProduct method is being called")
    this.products.push(product)
    return of(productClone);
  }
}
