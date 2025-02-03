import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {baseUrl} from '../constants/globalConstant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  constructor() { }

  getAllUsers() {
    return this.http.get(baseUrl + 'GetAllUser');
  }
}
