import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/model/product';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public message = '';

  constructor() { }

  ngOnInit(): void {
  }

  createProduct(productForm){
    if (productForm.invalid){
      this.message = "Invalid form, please correct it"
    }else{
      console.log(productForm)
      const product: Product = productForm.value.product;
      console.log(productForm.value)
      console.log(product)
    }
  }

}
