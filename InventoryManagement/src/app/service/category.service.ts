import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../constants/globalConstant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  http = inject(HttpClient);

  getCategories() {
    return this.http.get(baseUrl + 'GetAllCategory');
  }

  constructor() {
  }
}
