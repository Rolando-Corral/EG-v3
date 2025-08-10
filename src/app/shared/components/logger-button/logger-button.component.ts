import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-logger-button',
  templateUrl: './logger-button.component.html',
  styleUrls: ['./logger-button.component.scss']
})
export class LoggerButtonComponent {

  @Input() public isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
    console.log('login');
  }

  logout() {
    this.isLoggedIn = false;
    console.log('logout');
    confirm('Are you sure you want to logout?');
  }

}
