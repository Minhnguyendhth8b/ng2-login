import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent}
]

export const routing = RouterModule.forRoot(routes, { useHash: true });