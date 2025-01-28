import {Component, Input} from '@angular/core';
import {Breadcrumb} from 'primeng/breadcrumb';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  imports: [
    Breadcrumb,
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {

  @Input() breadcrumbItems: { label: string; url?: string }[] = [];

  home = { icon: 'pi pi-home', url: '/dashboard' };

}
