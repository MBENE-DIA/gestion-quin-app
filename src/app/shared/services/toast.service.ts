import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(
    public toastr: ToastrService
  ) { }

  showSuccess(message: string) {
    this.toastr.success('Reussi', message);
  }

  showError(message: string) {
    this.toastr.error('Erreur', message);
  }

  showWarning(message: string) {
    this.toastr.warning('Attention', message);
  }
}
