import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Drawer} from 'primeng/drawer';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'app-side-bar',
  imports: [
    Drawer,
    Button,
    Divider
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  visible: boolean = false;

}
