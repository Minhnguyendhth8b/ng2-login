import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Brand} from './../models/brand';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BrandService {
    constructor(private http:Http) {}
    private baseUrl:string = "http://0.0.0.0:3000/api/Brands/";
    getBrand(accessToken:string, offset?:number): Observable<Brand[]> {
        return this.http.get(this.baseUrl + '?access_token=' +accessToken + '&filter=%7B%22offset%22%3A%22'+ offset +'%22%7D')
            .map((res: Response) => res.json().data)
            .catch((error:any) => Observable.throw(error.json() || 'Internal server error'))
    }
}