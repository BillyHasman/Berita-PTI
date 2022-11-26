import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false;
  constructor(public loginservice: LoginAuthService, public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }

  async onSignin(email: string, password: string) {
    await this.loginservice.signin(email, password)
    if (this.loginservice.isLoggedin)
      this.isSignedIn = true
    this.router.navigate(['/blogs']);
  }


  gotoBlogs() {
    this.router.navigate(['/blogs']);
  }
}
