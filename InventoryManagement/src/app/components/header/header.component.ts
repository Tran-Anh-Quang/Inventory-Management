import {Component, Input} from '@angular/core';
import {Button} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    Button,
    Tooltip,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
}
