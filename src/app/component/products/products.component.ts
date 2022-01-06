import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist:any;
  constructor(private Api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.Api.getProduct().subscribe(res=>{
      this.productlist=res;

      this.productlist.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item :any){
    this.cart.addtoCart(item);

  }

}
