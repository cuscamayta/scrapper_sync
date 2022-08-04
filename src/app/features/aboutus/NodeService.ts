import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable()
export class NodeService {

    constructor(private _http: HttpClient) { }

    getAll(url): Observable<any> {
        return this._http.get(url) as Observable<any>;
    }

    get(url, body): Observable<any> {
        return this._http.post(url, body) as Observable<any>;
    }

    //   getOne(id:number):Observable<T> {
    //     return this._http.get(`${this.actionUrl}${id}`) as Observable<T>;
    //   }
}