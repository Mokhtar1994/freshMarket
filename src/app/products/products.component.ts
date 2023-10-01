import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  allProducts:Product[] = []
  searchKey:string = ''

  constructor(private _productService:ProductService , private _cartService:CartService){
    this.getAllProducts()
  }



  getAllProducts(){
    this._productService.getAllProducts().subscribe({
      next:(res)=>{
        console.log(res)
        this.allProducts = res.data
      }
    })
  } 

  addProductToCart(productId:string){

    this._cartService.addProductToCart(productId).subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  
  }



}
