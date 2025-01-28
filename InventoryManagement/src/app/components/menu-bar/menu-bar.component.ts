import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Ripple} from 'primeng/ripple';
import {Badge, BadgeDirective} from 'primeng/badge';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {Avatar} from 'primeng/avatar';
import {InputText} from 'primeng/inputtext';
import {MenuItem} from 'primeng/api';
import {BreadcrumbComponent} from '../breadcrumb/breadcrumb.component';
import {OverlayBadge} from 'primeng/overlaybadge';

@Component({
  selector: 'app-menu-bar',
  imports: [
    Menubar,
    BreadcrumbComponent,
    NgOptimizedImage,
    BadgeDirective,
    OverlayBadge
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{

  items: MenuItem[] = [];

  breadcrumbItems = [
    { label: 'Level 3', url: '/' },
    { label: 'Level 2', url: '/' },
    { label: 'Level 1', url: '/' }
  ];

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'Customers',
        icon: 'pi pi-users',
        items: [
          { label: 'Add Customer', icon: 'pi pi-user-plus', routerLink: '/add-customer' },
          { label: 'Manage Customers', icon: 'pi pi-user-edit', routerLink: '/manage-customers' }
        ]
      },
      { label: 'Calendar', icon: 'pi pi-calendar', routerLink: '/calendar' },
      { label: 'Stats', icon: 'pi pi-chart-line', routerLink: '/stats' }

    ];
  }

}
