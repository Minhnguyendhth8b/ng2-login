import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Member} from './../models/member';

import {MemberService} from './../services/member.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  member:Member;

  constructor(private router: Router, private memberService:MemberService) { }

  ngOnInit() {
    let currentMember = JSON.parse(localStorage.getItem('currentMember'));
    if(currentMember === null ) {
      this.router.navigateByUrl('/login');
    } else {
      this.memberService._getUser(currentMember.userId, currentMember.accessToken)
        .subscribe(mb => {
          this.member = mb;
        console.log(this.member); }, error => {console.log(error)})
    }
  }

  logOut() {
    localStorage.removeItem('currentMember');
    this.router.navigateByUrl('/login');
  }

}
