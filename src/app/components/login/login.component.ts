import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() { }

  onLoginClick() {
    this.authservice.loggedIn(true);
    this.router.navigate(['']);
  }
}
