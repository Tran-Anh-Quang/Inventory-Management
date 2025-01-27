import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Ripple} from 'primeng/ripple';
import {Badge} from 'primeng/badge';
import {NgClass, NgIf} from '@angular/common';
import {Avatar} from 'primeng/avatar';
import {InputText} from 'primeng/inputtext';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  imports: [
    Menubar,
    Ripple,
    Badge,
    NgIf,
    NgClass,
    Avatar,
    InputText
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          {label: 'New', icon: 'pi pi-fw pi-plus'},
          {label: 'Open', icon: 'pi pi-fw pi-download'}
        ]
      },
      {
        label: 'Edit',
        items: [
          {label: 'Left', icon: 'pi pi-fw pi-align-left'},
          {label: 'Right', icon: 'pi pi-fw pi-align-right'},
          {label: 'Center', icon: 'pi pi-fw pi-align-center'}
        ]
      },
      {
        label: 'Users',
        items: [
          {label: 'New', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Login', icon: 'pi pi-fw pi-user'}
        ]
      }
    ];
  }

}
