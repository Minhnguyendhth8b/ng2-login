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
  isError:boolean = false;
  error: string;
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    this.isError = false;
  }

  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(response => {
        if(response.data) {
          this.router.navigate([''])
        } else {
          this.isError = true;
          this.error = response.error.message;
        }
        
      }, error => {console.log(error)})
  }

}
