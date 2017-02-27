import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {BrandComponent} from './brand/brand.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path:'brands', component: BrandComponent},
    {path: 'brands/page/:page', component: BrandComponent}
]

export const routing = RouterModule.forRoot(routes, { useHash: true });
