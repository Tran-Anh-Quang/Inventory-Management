import { Component } from '@angular/core';
import {MenuBarComponent} from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  imports: [
    MenuBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
