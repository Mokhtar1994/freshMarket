import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId:string = ''
  currentProduct : Product = {} as Product

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

  constructor(private _productService:ProductService , private _activatedRoute:ActivatedRoute){
    this._activatedRoute.paramMap.subscribe((res:any)=>{
        console.log(res)
        this.productId = res.params.id
        console.log(this.productId)
      }
    )
    
    this.getSpecificProduct(this.productId)

  }


  getSpecificProduct(productId:string){
    this._productService.getSpecificProduct(productId).subscribe({
      next:(res)=>{
        console.log(res)
        this.currentProduct = res.data
      }
    })
  }

}
