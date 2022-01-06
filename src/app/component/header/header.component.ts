import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public Totalitem:number=0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res=>{
      this.Totalitem=res.length;
    })
  }

}
