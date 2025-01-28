import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Drawer} from 'primeng/drawer';

@Component({
  selector: 'app-side-bar',
  imports: [
    Drawer,
    Button
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  visible: boolean = false;

}
