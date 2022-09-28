import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TreeNode } from 'primeng/api';

@Injectable()
export class FileService {

    constructor(private http: HttpClient) { }

    getClubs() {
        return this.http.get<any>('../../../assets/data/madrid/clubs.json')
            .toPromise()
            .then(res => <TreeNode[]>res.data);
    }

    getTypes(federation) {
        return this.http.get<any>(`../../../assets/data/${federation}/types.json`)
            .toPromise()
            .then(res => <TreeNode[]>res);
    }

    getTypeInformation(typeName) {
        return this.http.get<any>(`../../../assets/data/madrid/${typeName}.json`)
            .toPromise()
            .then(res => <TreeNode>res);
    }

    getLazyFilesystem() {
        return this.http.get<any>('assets/filesystem-lazy.json')
            .toPromise()
            .then(res => <TreeNode[]>res.data);
    }
}