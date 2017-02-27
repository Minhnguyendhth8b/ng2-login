import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Member} from './../models/member';

import {MemberService} from './../services/member.services';
import {MissionService} from './../services/mission.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  member:Member;
  missions:Array<Object>;
  constructor(private router: Router, 
              private memberService:MemberService,
              private missionService:MissionService  
            ) { }

  ngOnInit() {
    let currentMember = JSON.parse(localStorage.getItem('currentMember'));
    if(currentMember === null ) {
      this.router.navigateByUrl('/login');
    } else {
      this.memberService._getUser(currentMember.userId, currentMember.accessToken)
        .subscribe(mb => {
          this.member = mb;
        console.log(this.member); }, error => {console.log(error)})
      this.missionService.getListMission(currentMember.accessToken)
        .subscribe(missions => {
          missions = missions.filter(mission => mission.complete === true)
          console.log(missions);
          this.missions = missions;
        })
    }
  }

  logOut() {
    localStorage.removeItem('currentMember');
    this.router.navigateByUrl('/login');
  }

}
