import { Injectable, signal } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _isLoggedIn = signal(false);

  constructor(private route: Router) { }

  get isLoggedIn() {
    return this._isLoggedIn();
  }

  login() {
    this._isLoggedIn.set(true);
    this.route.navigateByUrl('/dashboard');
  }

  logout() {
    this._isLoggedIn.set(false);
  }

}
