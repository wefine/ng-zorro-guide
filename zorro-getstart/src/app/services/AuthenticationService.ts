import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  constructor(
    public name: string,
    public password: string) {
  }
}

const users = [
  new User('admin', 'admin'),
  new User('guest', 'guest')
];

@Injectable()
export class AuthenticationService {
  constructor(
    private _router: Router) {
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }

  login(user) {
    let authenticatedUser = users.find(u => u.name === user.name);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this._router.navigate(['home']);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem('user') === null) {
      this._router.navigate(['login']);
    }
  }
}
