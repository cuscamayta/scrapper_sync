import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FBaseApiService {

    constructor(private _http: HttpClient) { }

    url:string = 'http://localhost:3001/v1/'

    upsertCategoriesBySeason(payload):Observable<any> {
        return this._http.post(`${this.url}categories/season/create`, payload) as Observable<any>;
    }

    // get(url, body): Observable<any> {
    //     return this._http.post,<any>(url, body) as Observable<any>;
    // }

    //   getOne(id:number):Observable<T> {
    //     return this._http.get(`${this.actionUrl}${id}`) as Observable<T>;
    //   }
}