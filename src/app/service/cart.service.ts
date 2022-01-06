import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemlist : any=[];
  public productlist = new BehaviorSubject<any>([]);
  constructor() { }
  getProduct(){
    return this.productlist.asObservable();
  }

  setProduct(product:any){
    this.cartItemlist.push(...product);
    this.productlist.next(product);

  }

  addtoCart(product:any){
    this.cartItemlist.push(product);
    this.productlist.next(this.cartItemlist);
    this.getTotalPrice();
    console.log(this.cartItemlist);
  }

  getTotalPrice():number{
    let grandtotal = 0;
    this.cartItemlist.map((a:any)=>{
      grandtotal += a.total;
    })
    return grandtotal;
  }

  removecartitem(product:any){
    this.cartItemlist.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemlist.splice(index,1);
      }
    })
    this.productlist.next(this.cartItemlist);
  }

  removeallcartitem(){
    this.cartItemlist=[];
    this.productlist.next(this.cartItemlist);
  }
}
