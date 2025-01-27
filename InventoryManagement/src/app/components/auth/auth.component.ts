import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Checkbox} from 'primeng/checkbox';
import {ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {InputText} from 'primeng/inputtext';

@Component({
  selector: 'app-auth',
  imports: [
    NgOptimizedImage,
    Checkbox,
    ButtonDirective,
    Ripple,
    InputText
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
