import {Component} from '@angular/core';
import {TableModule} from 'primeng/table';
import {CategoryService} from '../../service/category.service';
import {Card} from 'primeng/card';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-category',
  imports: [
    TableModule,
    Card,
    HeaderComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {

  categories: any[] = [];

  constructor(private readonly categoriesService: CategoryService) {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((res: any) => {
        this.categories = res.data;
      });
  }

}
