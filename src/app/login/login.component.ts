import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {LoginService} from './../services/login.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  isSubmitted:boolean = false;
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    
  }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(response => this.router.navigate(['']))
  }

}
