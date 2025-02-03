import {Component, OnInit} from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {Card} from "primeng/card";
import {HeaderComponent} from "../header/header.component";
import {TableModule} from "primeng/table";
import {Tag} from "primeng/tag";
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
    imports: [
        ButtonDirective,
        Card,
        HeaderComponent,
        TableModule,
        Tag,
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  users: any[] = [];

  constructor(private readonly userService: UserService) {
  }

  ngOnInit() {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this.userService.getAllUsers().subscribe({
      next: (res: any) => {
        this.users = res.data;
      },
      error: (err) => {
        console.error('Failed to fetch users:', err);
      }
    })
  }

  refreshLoadingUsers() {
    this.fetchAllUsers();
  }

}
