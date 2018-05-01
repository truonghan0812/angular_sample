

import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(private _http: HttpClient) { }
    getMinimumQuantity(){
        return this._http.get('src/app/config/data.json')
    }
}