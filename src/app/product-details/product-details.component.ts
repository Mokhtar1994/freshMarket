import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId:string = ''

  constructor(private _productService:ProductService , private _activatedRoute:ActivatedRoute){
    this._activatedRoute.paramMap.subscribe({
      next:(res:any)=>{
        console.log(res)
       this.productId =res.params.id
       console.log(this.productId)
      }
    })
    this.getSpecificProduct(this.productId)

  }


  getSpecificProduct(productId:string){
    this._productService.getSpecificProduct(productId).subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  }

}
