import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  public userName: any;
  public pass: any;
  public isSubmit: any = false;
  public loginError: any;
  public chekUserLogin: any;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.getToken()) {
      this.router.navigate(['task']);
    }
  }

  submitForm() {
    this.loginError = "";
    this.isSubmit = false;
    if (this.userName == "admin" && this.pass == "123") {
      this.authService.setToken({ user: this.userName });
      this.isSubmit = true;
      this.router.navigate(['task']);
    } else if (this.userName != "testuser" && this.pass == "123") {
      this.loginError = "Invalid user name";
    } else if (this.userName == "testuser" && this.pass != "123") {
      this.loginError = "Invalid user password";
    } else {
      this.loginError = "Invalid user name and password";
    }
  }

  logout() {
    this.authService.logout();
    this.chekUserLogin = null;
    this.router.navigate(['/']);
  }

}
