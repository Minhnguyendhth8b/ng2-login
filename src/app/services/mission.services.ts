import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MissionService {
    constructor(private http:Http) {}
    private baseUrl:string = 'http://0.0.0.0:3000/api/Missions/';

    getListMission(accessToken:string):Observable<Array<any>> {
        return this.http.get(this.baseUrl + "checkList?access_token=" + accessToken)
                .map((res:Response) => res.json().data)
                .catch((error:any) => Observable.throw(error.json() || 'Internal server error'))
    }
}