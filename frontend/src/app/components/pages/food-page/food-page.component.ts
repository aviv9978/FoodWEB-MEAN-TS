import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, shareReplay, take, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  food$!: Observable<Food>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id)
        this.food$ = this.foodService.getFoodById(params.id).pipe(
          tap((food) => (this.food = food)),
          shareReplay()
        );
    });
  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
