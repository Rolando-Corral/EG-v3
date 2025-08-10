import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  public isLoggedIn: boolean = true;

  login() {
    this.isLoggedIn = true;
    console.log('login');
  }
  
  public logout() {
    this.isLoggedIn = false;
    console.log('logout');
    confirm('Are you sure you want to logout?');
  }
}
