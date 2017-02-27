import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {BrandService} from './../services/brand.services';

import {Brand} from './../models/brand';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[];
  page:number = 1;
  constructor(private router:Router, private brandService:BrandService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    let currentMember = JSON.parse(localStorage.getItem('currentMember'));
    if(currentMember === null ) {
      this.router.navigateByUrl('/login');
    } else {
      this.activeRoute.params.subscribe((p:any) => this.page = p.page)
      console.log(this.page)
      this.brandService.getBrand(currentMember.accessToken, (this.page > 1) ? this.page*60 : 1)
        .subscribe(brands => { 
          console.log(brands);
          this.brands = brands
        }, error => console.log(error))
    }
  }

  onScroll(event) {
    // console.log(window.innerHeight + window.scrollY);
    console.log(document.body.scrollHeight)
  }

}
