import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {CategoryService} from '../../service/category.service';
import {Card} from 'primeng/card';
import {HeaderComponent} from '../header/header.component';
import {ButtonDirective} from 'primeng/button';
import {Tag} from 'primeng/tag';
import {PaginatorComponent} from '../paginator/paginator.component';

@Component({
  selector: 'app-category',
  imports: [
    TableModule,
    Card,
    HeaderComponent,
    ButtonDirective,
    Tag,
    PaginatorComponent
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit{

  categories: any[] = [];
  pagedCategories: any[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  first: number = 0;

  constructor(private readonly categoriesService: CategoryService) {
  }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoriesService.getCategories().subscribe({
      next: (res: any) => {
        this.categories = res.data || [];  // Store the categories
        this.totalRecords = this.categories.length;  // Set the total records for pagination
        this.updatePagedCategories();  // Call to load the current page
      },
      error: (err) => {
        console.error('Failed to fetch categories:', err);
      },
    });
  }

  // Cập nhật dữ liệu cho trang hiện tại
  updatePagedCategories(): void {
    const startIndex = this.first;
    const endIndex = this.first + this.rows;
    this.pagedCategories = this.categories.slice(startIndex, endIndex);
  }

  // Xử lý sự kiện phân trang
  onPageChange(event: any): void {
    this.first = event.first;  // Get the starting index of the page
    this.rows = event.rows;    // Get the number of rows per page
    this.updatePagedCategories();  // Update the paginated data
  }

}
