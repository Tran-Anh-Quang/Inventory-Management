import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {NgOptimizedImage} from '@angular/common';
import {MenuItem} from 'primeng/api';
import {OverlayBadge} from 'primeng/overlaybadge';
import {SideBarComponent} from '../side-bar/side-bar.component';

@Component({
  selector: 'app-menu-bar',
  imports: [
    Menubar,
    NgOptimizedImage,
    OverlayBadge,
    SideBarComponent
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{

  items: MenuItem[] = [];

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
