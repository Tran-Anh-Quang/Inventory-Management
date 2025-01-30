import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {OverlayBadge} from 'primeng/overlaybadge';
import {SideBarComponent} from './side-bar/side-bar.component';
import {Avatar} from 'primeng/avatar';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-menu-bar',
  imports: [
    Menubar,
    OverlayBadge,
    SideBarComponent,
    Avatar,
    Menu
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{

  items: MenuItem[] = [];

  menuItems = [
    {
      items: [
        {
          label: 'Trần Anh Quang',
          icon: 'pi pi-user',
          styleClass: 'font-semibold text-lg',
          escape: false
        },
        {
          label: 'dinosaurous9x@gmail.com',
          icon: 'pi pi-envelope',
          styleClass: 'text-sm text-500'
        }
      ]
    },
    {
      separator: true
    },
    {
      items: [
        { label: 'Account settings', icon: 'pi pi-cog' },
        { label: 'Payment methods', icon: 'pi pi-credit-card' },
        { label: 'Purchase history', icon: 'pi pi-calendar' }
      ]
    },
    {
      separator: true
    },
    {
      items: [
        {
          label: 'Language',
          icon: 'pi pi-globe',
          escape: false,
        }
      ]
    },
    {
      separator: true
    },
    {
      items: [
        { label: 'Logout', icon: 'pi pi-sign-in' },
      ]
    }
  ];


  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/' },
      {
        label: 'Customers',
        icon: 'pi pi-user',
        items: [
          { label: 'Add Customer', icon: 'pi pi-user-plus', routerLink: '/add-customer' },
          { label: 'Manage Customers', icon: 'pi pi-users', routerLink: '/manage-customers' }
        ]
      },
      { label: 'Calendar', icon: 'pi pi-calendar', routerLink: '/calendar' },
      { label: 'Stats', icon: 'pi pi-chart-line', routerLink: '/stats' }

    ];
  }

}
