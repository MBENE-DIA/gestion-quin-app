import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../admin/user/user';
import { UserService } from '../../admin/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User | any;
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    console.log('user ' + this.user);
  }

  logOut(): void{
    this.userService.islogin = false;
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    this.router.navigate(['']);
  }
}
