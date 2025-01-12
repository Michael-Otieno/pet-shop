import { Component, inject } from '@angular/core';
import { UserService } from '@furn-shop/shared-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly userService = inject(UserService);

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

  simulateLogin() {
    this.userService.login();
  }

  simulateLogout() {
    this.userService.logout();
  }
}
