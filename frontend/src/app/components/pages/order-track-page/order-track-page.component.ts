import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/Order';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-track-page',
  templateUrl: './order-track-page.component.html',
  styleUrls: ['./order-track-page.component.css'],
})
export class OrderTrackPageComponent implements OnInit {
  order$!: Observable<Order>;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (!params.orderId) return;

    this.order$ = this.orderService.trackOrderById(params.orderId);
  }
}
