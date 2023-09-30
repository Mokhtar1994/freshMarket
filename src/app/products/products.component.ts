import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  allProducts:Product[] = []
  searchKey:string = ''

  constructor(private _productService:ProductService){
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
}
