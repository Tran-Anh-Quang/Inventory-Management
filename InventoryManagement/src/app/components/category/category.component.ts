import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {CategoryService} from '../../service/category.service';
import {Card} from 'primeng/card';
import {HeaderComponent} from '../header/header.component';
import {Button, ButtonDirective} from 'primeng/button';
import {Tag} from 'primeng/tag';
import {PaginatorComponent} from '../paginator/paginator.component';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [
    TableModule,
    Card,
    HeaderComponent,
    ButtonDirective,
    Tag,
    PaginatorComponent,
    Dialog,
    InputText,
    Button,
    ToggleSwitch,
    FormsModule,
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
  visible: boolean = false;
  statusChecked: boolean = false;

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

  updatePagedCategories(): void {
    const startIndex = this.first;
    const endIndex = this.first + this.rows;
    this.pagedCategories = this.categories.slice(startIndex, endIndex);
  }

  onPageChange(event: any): void {
    this.first = event.first;  // Get the starting index of the page
    this.rows = event.rows;    // Get the number of rows per page
    this.updatePagedCategories();  // Update the paginated data
  }

  showDialog() {
    this.visible = true;
  }

}
