import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {}

  // Show success message
  showSuccess(message: string, title: string = 'Success') {
    this.messageService.add({
      severity: 'success',
      summary: title,
      detail: message,
      life: 3000
    });
  }

  // Show error message
  showError(message: string, title: string = 'Error') {
    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: message,
      life: 3000
    });
  }

  // Show warning message
  showWarning(message: string, title: string = 'Warning') {
    this.messageService.add({
      severity: 'warn',
      summary: title,
      detail: message,
      life: 3000
    });
  }

  // Show info message
  showInfo(message: string, title: string = 'Info') {
    this.messageService.add({
      severity: 'info',
      summary: title,
      detail: message,
      life: 3000
    });
  }

  // Clear all messages
  clear() {
    this.messageService.clear();
  }
}
