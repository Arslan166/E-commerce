import { CartComponent } from './component/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'Product', component:ProductsComponent},
  {path:'Cart', component:CartComponent},
  {path:'', redirectTo:'Product', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
