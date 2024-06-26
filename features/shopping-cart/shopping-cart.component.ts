import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems: any[] = [];
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeallCart(): void {
    this.cartService.removeallCart();
    this.cartItems = [];
    alert('Cart cleared!');
  }
  clearCart(){
    
  }
  onBack(){}
}
