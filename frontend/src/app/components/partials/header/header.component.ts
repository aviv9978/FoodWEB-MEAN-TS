import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: User;
  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {
    this.cartService
      .getCartObservable()
      .subscribe((cart) => (this.cartQuantity = cart.totalCount));
    this.userService.userObservable.subscribe((newUser) => (this.user = newUser));
  }

  logout() {
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
