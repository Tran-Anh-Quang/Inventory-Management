import { Component } from '@angular/core';
import {Sidebar} from 'primeng/sidebar';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-side-bar',
  imports: [
    Sidebar,
    ButtonDirective
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  visibleSidebar: boolean = false;

  toggleSidebar() {
    this.visibleSidebar = !this.visibleSidebar;
  }

}
