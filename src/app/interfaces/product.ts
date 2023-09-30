export interface Product {
    title:string
    price:number
    imageCover:string
    _id:string
    description:string
    category: category
    ratingsAverage:number
    images:string[]
  
}
 interface category{
    name?:string

}
