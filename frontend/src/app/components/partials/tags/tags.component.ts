import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { FoodService } from '../../../services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  tags$!: Observable<Tag[]>;
  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.tags$ = this.foodService.getAllTags();
  }
}
