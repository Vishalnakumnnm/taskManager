import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  public usreName:any;
  public pass:any;
  public isSubmit:any = false;
  public loginError:any;
  public chekUserLogin:any;

  constructor( private router: Router) { }

  ngOnInit() {
    this.chekUserLogin = localStorage.getItem('userLogin');
    debugger
    if(this.chekUserLogin && this.chekUserLogin != 'null'){
      this.router.navigate(['task']);
    }else{
      this.router.navigate(['/']);
    }
  }

  submitForm(){
  	this.loginError= "";
  	this.isSubmit = false;
  	if(this.usreName == "admin" && this.pass == "123"){
      localStorage.setItem('userLogin', "yes");
      this.chekUserLogin = "userLogin";
      this.isSubmit = true;
      this.router.navigate(['task']);
  	}else if(this.usreName != "testuser" && this.pass == "123"){
  		this.loginError = "Invalid user name";
  	}else if(this.usreName == "testuser" && this.pass != "123"){
  		this.loginError = "Invalid user password";
  	}else{
  		this.loginError = "Invalid user name and password";
  	}
  }

  logout(){
    localStorage.setItem('userLogin', null);
    this.chekUserLogin = "null";
    this.router.navigate(['/']);
  }

}
