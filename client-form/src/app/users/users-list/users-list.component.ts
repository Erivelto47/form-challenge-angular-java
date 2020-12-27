import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.findAllUsers();
  }

  handleClick(user: User): void {
    this.router.navigate(['/user'], { queryParams: { id: user.id } });
  }
}
