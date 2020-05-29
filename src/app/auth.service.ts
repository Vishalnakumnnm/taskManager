import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInUserData;

  constructor(
    public router: Router
  ) {

    if (this.getToken()) {
      let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUser) {
        this.loggedInUserData = loggedInUser.email;
      }
    }
  }

  setToken(token) {
    this.loggedInUserData = token;
    localStorage.setItem('loggedInUser', JSON.stringify(token));
  }

  getToken(): boolean {
    return !!localStorage.getItem('loggedInUser');
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.loggedInUserData = null;
    this.router.navigateByUrl('/login');
  }
}
