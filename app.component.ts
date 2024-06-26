import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProductListPageComponent } from './features/product-list-page/product-list-page.component';
import { CommonModule } from '@angular/common';
import { ProductDetailsPageComponent } from './features/product-details-page/product-details-page.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductDetailsPageComponent
  ,HeaderComponent,ProductListPageComponent,ShoppingCartComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {                                 
  title = 'Shopping Site';
}
