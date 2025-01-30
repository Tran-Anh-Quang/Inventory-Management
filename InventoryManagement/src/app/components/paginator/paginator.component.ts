import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Paginator} from 'primeng/paginator';

@Component({
  selector: 'app-paginator',
  imports: [
    Paginator
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  @Input() first: number = 0;
  @Input() rows: number = 10;
  @Input() totalRecords: number = 0;

  @Output() pageChange: EventEmitter<any> = new EventEmitter();

  onPageChange(event: any): void {
    this.pageChange.emit(event);
  }

}
