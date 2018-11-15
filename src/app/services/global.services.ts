import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class GlobalService {
    URL_SERVER = '';

    options = {
        headers : new HttpHeaders({
            'Content-Type' : 'application/json'
            // 'token' : localStorage.getItem('token')

        })
    };

    constructor(private _http: HttpClient) { }

    get(url: string) {
        return  this._http.get( this.URL_SERVER + url, this.options );
    }

    post(url: string, body: any) {
        return this._http.post(this.URL_SERVER + url, body, this.options);
    }

}

