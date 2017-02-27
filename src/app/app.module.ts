import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MomentModule} from 'angular2-moment';
// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// Services
import {LoginService} from './services/login.services';
import {MemberService} from './services/member.services';
import {MissionService} from './services/mission.services';
import {BrandService} from './services/brand.services';
import {routing} from './app.routing';
// Directive
import {TooltipDirective} from './directives/tooltip.directive';
import { BrandComponent } from './brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TooltipDirective,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MomentModule
  ],
  providers: [LoginService, MemberService, MissionService, BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
