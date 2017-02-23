import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map'; // Map Response to use in component;
import 'rxjs/add/operator/catch'; // Catch error in http request

@Injectable()
export class LoginService {
    constructor(private http:Http) {}

    private loginUrl:string = 'http://0.0.0.0:3000/api/Members/login?force=1';

    login(email:string, password: string): Observable<Object> {
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, JSON.stringify({"email": email, "password": password}), options)
                .map((res:Response) => {
                    let member = res.json();
                    if(member && typeof member.data !== 'undefined' && member.data.id) {
                        localStorage.setItem('currentMember', JSON.stringify({"accessToken":member.data.id, "userId": member.data.userId}));
                        return member;
                    }
                })
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }
}