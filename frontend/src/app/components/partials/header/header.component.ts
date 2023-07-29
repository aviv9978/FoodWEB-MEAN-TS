import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartQuantity = 0;
  constructor(private cartService: CartService) {
    this.cartService
      .getCartObservable()
      .subscribe((cart) => (this.cartQuantity = cart.totalCount));
  }
}
