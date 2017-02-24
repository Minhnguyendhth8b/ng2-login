import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Member} from './../models/member';

@Injectable()
export class MemberService {
    constructor(private http:Http) {}

    private baseUrl:string = 'http://0.0.0.0:3000/api/Members/';

    _getUser(userId:string, accessToken:string):Observable<Member> {
        return this.http.get(this.baseUrl + userId + '?access_token=' + accessToken)
            .map((member:Response) => member.json().data)
            .catch((error:any) => Observable.throw(error.json() || 'Can\'t get any information'))
    }
}