import {Routes} from '@angular/router';
import { ProductDetailsPageComponent } from './features/product-details-page/product-details-page.component';
import { ProductListPageComponent } from './features/product-list-page/product-list-page.component'; 
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
export const routes = [
  {path: 'productDetails/:id', component: ProductDetailsPageComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent },
  {path: 'productList', component: ProductListPageComponent},
  {path: '', component: ProductListPageComponent},

];