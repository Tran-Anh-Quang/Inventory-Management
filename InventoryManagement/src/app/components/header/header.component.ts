import {Component, Input} from '@angular/core';
import {ButtonDirective} from 'primeng/button';
import {Tooltip} from 'primeng/tooltip';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    Tooltip,
    FormsModule,
    ButtonDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() title: string = '';
  @Input() subtitle: string = '';
}
