import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public Product:any=[];
  public grandTotal!:number;


  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.Product = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
  }
  removecartItem(item:any){
    this.cart.removecartitem(item);

  }
  emptycart(){
    this.cart.removeallcartitem();
  }

}
