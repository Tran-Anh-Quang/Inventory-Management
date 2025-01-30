import {Component} from '@angular/core';
import {Toast} from 'primeng/toast';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-toast',
  imports: [
    Toast,
    PrimeTemplate
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  constructor() { }

}
